/**
 * =====================================================
 *  NAME    : directives.controller.ts
 *  DESCRIPTION: INFORMATION ENDPOINTS "/directives/*"
 * =====================================================
 */

// DEPENDENCIES
import {
  Controller,
  Post,
  Get,
  Body,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { DirectivesService } from './directives.service';

// ENDPOINTS
@Controller('directives')
export class DirectivesController {
  constructor(private readonly directivesService: DirectivesService) {}
  @Post('getInfoUser')
  getUserInfo(@Body() body: { token: string }) {
    if (!body.token) throw new BadRequestException('Body Require');
    return this.directivesService.GetInfoUser(body.token);
  }
  @Get('GetRolUser')
  GetRolUser(@Headers() headers: Record<string, string>) {
    let token = headers['token'] || headers['authorization'];
    if (!token) throw new BadRequestException('Missing token header');
    token = token.replace(/\s+/g, '').trim();
    return this.directivesService.GetRolUser(token);
  }
}
