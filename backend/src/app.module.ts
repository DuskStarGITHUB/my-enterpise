/**
 * =====================================================
 *  NAME    : app.module.ts
 *  DESCRIPTION: NEST MODULES PACKAGER
 * =====================================================
 */

// DEPENDENCIES
import { Module } from '@nestjs/common';
import { ServerModule } from './server/server.module';
import { TestModule } from './test/test.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
// MODULES
@Module({
  imports: [ServerModule, TestModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
