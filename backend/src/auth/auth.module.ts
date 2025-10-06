/**
 * =====================================================
 *  NAME    : auth.module.ts
 *  DESCRIPTION: AUTH MODULE PACKAGER
 * =====================================================
 */

// DEPENDENCIES
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma/prisma.service';

// MODULE
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      // CONFIG
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
