/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * =====================================================
 *  NAME    : directives.service.ts
 *  DESCRIPTION: SERVICE FUNCTIONS FOR USE DB PRIMARY
 * =====================================================
 */

// DEPENDENCIES
import { Injectable, BadRequestException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { PrismaService } from '../prisma/prisma.service';

// SERVICES
@Injectable()
export class DirectivesService {
  constructor(
    private readonly AuthService: AuthService,
    private readonly prisma: PrismaService,
  ) {}
  async GetInfoUser(token: string) {
    const stateToken = await this.AuthService.validateToken(token);
    const { email } = stateToken.payload;
    try {
      const userData = await this.prisma.users.findUnique({
        where: { email },
        select: {
          role_id: true,
          entity_id: true,
          spot_id: true,
          profile_id: true,
        },
      });
      if (!userData) {
        throw new BadRequestException('USER NOT FOUND');
      }
      if (!userData.profile_id) {
        throw new BadRequestException('USER HAS NO PROFILE');
      }
      const profileData = await this.prisma.profiles.findUnique({
        where: { id_profile: userData.profile_id },
        select: {
          id_profile: true,
          first_name: true,
          last_name: true,
          phone: true,
          avatar_url: true,
          bio: true,
        },
      });
      const finalData = { ...userData, email, ...profileData };
      return `userData:${JSON.stringify(finalData)}`;
    } catch {
      throw new BadRequestException('DATA REQUEST BAD');
    }
  }
  async GetRolUser(token: string) {
    const stateToken = await this.AuthService.validateToken(token);
    const { email } = stateToken.payload;
    try {
      const roleId = await this.prisma.users.findUnique({
        where: { email },
        select: {
          role_id: true,
        },
      });
      if (!roleId) {
        throw new BadRequestException('ROL NOT FOUND');
      }
      if (!roleId.role_id) {
        throw new BadRequestException('ROL HAS PROBLEM WITH ID');
      }
      const rolInfo = await this.prisma.roles.findUnique({
        where: { id_role: roleId.role_id },
        select: {
          id_role: true,
          name: true,
          description: true,
        },
      });
      return { rolInfo };
    } catch {
      throw new BadRequestException('ROL REQUEST BAD');
    }
  }
}
