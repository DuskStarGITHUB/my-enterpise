/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * =====================================================
 *  NAME    : auth.controller.ts
 *  DESCRIPTION: AUTH ENDPOINTS "/auth/*"
 * =====================================================
 */

// DEPENDENCIES
import {
  Controller,
  Post,
  Body,
  Headers,
  UnauthorizedException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

// CONTROLLER
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  // ALL CALLS IN "/auth/action"
  @Post('action')
  async action(@Body() body: { action: string; data: any }) {
    const { action, data } = body;
    if (!action || !data) throw new BadRequestException('DATA UNKNOWN');
    switch (action) {
      // LOGIN
      case 'login': {
        if (!data.email || !data.password)
          throw new BadRequestException('DATA UNKNOWN');
        const user = await this.authService.validateUser(
          data.email,
          data.password,
        );
        if (!user) throw new UnauthorizedException('INVALID CREDENTIALS');
        return this.authService.login(user);
      }
      // REGISTER USER ACCOUNT
      case 'register': {
        if (!data.email || !data.password || !data.token)
          throw new BadRequestException('DATA UNKNOWN');
        return this.authService.register(data);
      }
      // REGISTER ACCOUNT PRYMARY
      case 'start': {
        const entityFields = [
          'name',
          'type',
          'description',
          'number',
          'size',
          'logo_url',
        ];
        for (const f of entityFields)
          if (!data.entity?.[f])
            throw new BadRequestException(`DATA ENTITIE FIELD '${f}' UNKNOWN`);
        if (!data.user?.email || !data.user?.password)
          throw new BadRequestException('DATA UNKNOWN USER');
        return this.authService.start(data);
      }
      // VALIDATE TOKEN
      case 'validate': {
        if (typeof data !== 'string')
          throw new BadRequestException('TOKEN REQUIRE IN TYPE STRING');
        return this.authService.validateToken(data);
      }
      // REFRESH
      case 'refresh': {
        if (typeof data !== 'string')
          throw new BadRequestException('Refresh token required as string');
        return this.authService.refreshToken(data);
      }
      // REVOKE TOKEN
      case 'revoke': {
        if (typeof data !== 'string')
          throw new BadRequestException('Refresh token required as string');
        return this.authService.revokeToken(data);
      }
      // ACTION ERR
      default:
        throw new BadRequestException(`UNKNOWN ACTION: ${action}`);
    }
  }
  @Post('login')
  login() {
    throw new ForbiddenException('Direct access blocked');
  }
  @Post('register')
  register() {
    throw new ForbiddenException('Direct access blocked');
  }
  @Post('start')
  start() {
    throw new ForbiddenException('Direct access blocked');
  }
  @Post('validate')
  validate() {
    throw new ForbiddenException('Direct access blocked');
  }
  @Post('refresh')
  refresh() {
    throw new ForbiddenException('Direct access blocked');
  }
  @Post('revoke')
  revoke() {
    throw new ForbiddenException('Direct access blocked');
  }
}
