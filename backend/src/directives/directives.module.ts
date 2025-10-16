/**
 * =====================================================
 *  NAME    : directives.service.ts
 *  DESCRIPTION: MODULE USE DB PRIMARY
 * =====================================================
 */

// DEPENDENCIES
import { Module } from '@nestjs/common';
import { DirectivesService } from './directives.service';
import { DirectivesController } from './directives.controller';
import { AuthModule } from '../auth/auth.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [DirectivesController],
  providers: [DirectivesService, PrismaService],
})
export class DirectivesModule {}
