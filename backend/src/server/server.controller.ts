/**
 * =====================================================
 *  NAME    : server.controller.ts
 *  DESCRIPTION: SERVER INFO ENDPOINT "/"
 * =====================================================
 */

// DEPENDENCIES
import { Controller, Get } from '@nestjs/common';

// CONTROLLER
@Controller()
export class ServerController {
  @Get('/')
  checkService() {
    // INFO
    return {
      message: 'Backend activo',
      framework: 'NestJS',
      runtime: 'Node.js',
      packageManager: 'npm',
      language: 'TypeScript',
      ORM: 'Prisma',
      timestamp: new Date().toISOString(),
    };
  }
}
