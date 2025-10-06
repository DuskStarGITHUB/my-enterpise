/**
 * =====================================================
 *  NAME    : server.module.ts
 *  DESCRIPTION: SERVER PACKAGER
 * =====================================================
 */

// DEPENDENCIES
import { Module } from '@nestjs/common';
import { ServerController } from './server.controller';

// PACKAGER
@Module({
  controllers: [ServerController],
  providers: [],
})
export class ServerModule {}
