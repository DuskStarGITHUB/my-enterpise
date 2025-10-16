/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * =====================================================
 *  NAME    : auth.service.ts
 *  DESCRIPTION: AUTH FUNCTIONS FOR ACTIONS IN DB PRIMARY
 * =====================================================
 */

// DEPENDENCIES
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { users } from '../../prisma/client';

// SERVICE
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  // LOGS TABLE
  private async logAction(
    user_id: number | null,
    action: string,
    description?: string,
  ) {
    await this.prisma.logs.create({
      data: {
        user_id,
        action,
        description: description || action,
      },
    });
  }
  // VALIDATE USER STATE
  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<users, 'password'>> {
    if (!email || !password) throw new BadRequestException('DATA UNKNOWN');
    const user = await this.prisma.users.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('INVALID CREDENTIALS');
    let loginRecord = await this.prisma.logins.findFirst({
      where: { id_user: user.id_user },
    });
    if (loginRecord && loginRecord.state === 'block') {
      const lastUpdate = loginRecord.updated_at
        ? new Date(loginRecord.updated_at)
        : new Date();
      const diffHours = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60);
      if (diffHours < 24)
        throw new UnauthorizedException(
          'ACCOUNT TEMPORARILY BLOCKED, TOO MANY ATTEMPTS, TRY AGAIN LATER',
        );
      await this.prisma.logins.update({
        where: { id_login: loginRecord.id_login },
        data: { attempts: 0, state: 'attempt', updated_at: new Date() },
      });
      loginRecord = { ...loginRecord, attempts: 0, state: 'attempt' };
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      let newAttempts = 1;
      let newState = 'attempt';
      if (loginRecord) {
        newAttempts = (loginRecord.attempts || 0) + 1;
        newState = newAttempts >= 5 ? 'block' : 'attempt';
        await this.prisma.logins.update({
          where: { id_login: loginRecord.id_login },
          data: {
            attempts: newAttempts,
            state: newState,
            updated_at: new Date(),
          },
        });
        if (newState === 'block')
          throw new UnauthorizedException(
            'TOO MANY ATTEMPTS, ACCOUNT TEMPORARILY BLOCKED',
          );
      } else {
        await this.prisma.logins.create({
          data: { id_user: user.id_user, attempts: 1, state: 'attempt' },
        });
      }
      throw new UnauthorizedException('INVALID CREDENTIALS');
    }
    const { password: _, ...result } = user;
    return result;
  }
  // REGISTER ACCOUNT
  async register(data: {
    email: string;
    password: string;
    token: string;
    entity_id: number;
  }) {
    if (data.password.length < 8) throw new BadRequestException('PASSWORD LOW');
    const exists = await this.prisma.users.findUnique({
      where: { email: data.email },
    });
    if (exists) throw new BadRequestException('EMAIL ALREADY REGISTERED');
    const hashed = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.users.create({
      data: {
        email: data.email,
        password: hashed,
        role_id: 5,
        entity_id: data.entity_id,
      },
    });
    const { password, ...result } = user;
    await this.logAction(
      result.id_user,
      'register',
      `User account for '${data.entity_id}' created`,
    );
    return result;
  }
  // REGISTER ENTITIE
  async start(data: {
    entity: {
      name: string;
      type: string;
      description: string;
      number: string;
      size: string;
      logo_url: string;
    };
    user: { email: string; password: string; last_login_at?: Date };
  }) {
    const { entity, user } = data;
    const entityFields = [
      'name',
      'type',
      'description',
      'number',
      'size',
      'logo_url',
    ];
    for (const field of entityFields)
      if (!entity[field])
        throw new BadRequestException(`Entity field '${field}' is required`);
    const userFields = ['email', 'password'];
    for (const field of userFields)
      if (!user[field])
        throw new BadRequestException(`User field '${field}' is required`);
    if (user.password.length < 8)
      throw new BadRequestException('Password must be at least 8 characters');
    const existsUser = await this.prisma.users.findUnique({
      where: { email: user.email },
    });
    if (existsUser) throw new BadRequestException('Email already registered');
    const existingEntity = await this.prisma.entities.findFirst({
      where: { name: entity.name },
    });
    if (existingEntity)
      throw new BadRequestException('Entity with this name already exists');
    const newEntity = await this.prisma.entities.create({
      data: { ...entity },
    });
    const newSpot = await this.prisma.spots.create({
      data: {
        entity_id: newEntity.id_entity,
        name: 'Startup',
        description: newEntity.name,
      },
    });
    const newProfile = await this.prisma.profiles.create({ data: {} });
    const hashed = await bcrypt.hash(user.password, 10);
    const newUser = await this.prisma.users.create({
      data: {
        email: user.email,
        password: hashed,
        role_id: 3,
        entity_id: newEntity.id_entity,
        spot_id: newSpot.id_spot,
        profile_id: newProfile.id_profile,
        last_login_at: user.last_login_at || null,
      },
    });
    const { password, ...resultUser } = newUser;
    await this.logAction(
      resultUser.id_user,
      'start',
      `User created and entity '${newEntity.name}' created`,
    );
    return {
      entity: newEntity,
      spot: newSpot,
      profile: newProfile,
      user: resultUser,
    };
  }
  // LOGIN
  async login(user: Omit<users, 'password'>) {
    const payload = {
      email: user.email,
      sub: user.id_user,
      role: user.role_id,
    };
    const access_token = this.jwtService.sign(payload, { expiresIn: '1h' });
    const r_token = this.jwtService.sign(payload, { expiresIn: '7d' });
    const existing = await this.prisma.tokens.findFirst({
      where: { user_id: user.id_user },
    });
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    let tokenRecord;
    if (existing)
      tokenRecord = await this.prisma.tokens.update({
        where: { id_token: existing.id_token },
        data: {
          r_token,
          access_token,
          exec_token: null,
          revoked: false,
          status: 'logged',
          active: true,
          expires_at: expiresAt,
        },
      });
    else
      tokenRecord = await this.prisma.tokens.create({
        data: {
          user_id: user.id_user,
          r_token,
          access_token,
          revoked: false,
          status: 'logged',
          active: true,
          expires_at: expiresAt,
        },
      });
    await this.prisma.users.update({
      where: { id_user: user.id_user },
      data: { last_login_at: new Date() },
    });
    const loginRecord = await this.prisma.logins.findFirst({
      where: { id_user: user.id_user },
    });
    if (loginRecord)
      await this.prisma.logins.update({
        where: { id_login: loginRecord.id_login },
        data: {
          id_token: tokenRecord.id_token,
          attempts: 0,
          state: 'access',
          updated_at: new Date(),
        },
      });
    else
      await this.prisma.logins.create({
        data: {
          id_user: user.id_user,
          id_token: tokenRecord.id_token,
          attempts: 0,
          state: 'access',
        },
      });
    return { access_token, r_token };
  }
  // REFRESH TOKEN
  async refreshToken(r_token: string) {
    if (!r_token) throw new BadRequestException('r_token required');
    const record = await this.prisma.tokens.findFirst({
      where: { r_token, revoked: false },
      include: { users: true },
    });
    if (!record) throw new UnauthorizedException('Invalid refresh token');
    const payload = {
      email: record.users.email,
      sub: record.user_id,
      role: record.users.role_id,
    };
    const new_access = this.jwtService.sign(payload, { expiresIn: '1h' });
    const new_r = this.jwtService.sign(payload, { expiresIn: '7d' });
    await this.prisma.tokens.update({
      where: { id_token: record.id_token },
      data: {
        access_token: new_access,
        exec_token: record.r_token,
        r_token: new_r,
        status: 'refreshed',
        revoked: false,
        active: true,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
    return { access_token: new_access, r_token: new_r };
  }
  // DENY TOKEN
  async revokeToken(r_token: string) {
    if (!r_token) throw new BadRequestException('r_token required');
    const record = await this.prisma.tokens.findFirst({
      where: { r_token, revoked: false },
    });
    if (!record) return { revoked: false };
    await this.prisma.tokens.update({
      where: { id_token: record.id_token },
      data: {
        access_token: '',
        r_token: '',
        exec_token: r_token,
        status: 'revoked',
        revoked: true,
        active: false,
        expires_at: null,
      },
    });
    await this.logAction(record.user_id, 'revoke_token', `Token revoked`);
    return { revoked: true };
  }
  // VALIDATE TOKEN JWT
  async validateToken(token: string) {
    if (!token) throw new BadRequestException('TOKEN REQUIRE');
    try {
      const r = await this.prisma.tokens.findFirst({
        where: { r_token: token, revoked: false },
      });
      const payload = await this.jwtService.verifyAsync(token);
      if (r) return { valid: true, type: 'r_token', payload };
      const a = await this.prisma.tokens.findFirst({
        where: { access_token: token, revoked: false },
      });
      if (a) return { valid: true, type: 'access_token', payload };
      throw new UnauthorizedException('DATA UNKNOWN');
    } catch {
      throw new BadRequestException('TOKEN VERIFY ERROR');
    }
  }
}
