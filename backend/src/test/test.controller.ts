/**
 * =====================================================
 *  NAME    : test.controller.ts
 *  DESCRIPTION: DEFINE TEST ENDPOINTS "/test/*"
 * =====================================================
 */

// DEPENDENCIES
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateUserDto } from './create-user.dto';

// CONTROLLER
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}
  // GIVE STATUS PRIMARY DB
  @Get('/')
  async checkDB() {
    return await this.testService.DBstatus();
  }
  // GIVE STATUS SECONDARY DB TEST
  @Get('extra/')
  async checkDB2() {
    return await this.testService.DBstatus2();
  }
  // GIVE USER FROM DB TEST
  @Get('extra/user/:id')
  async getUserById(@Param('id') id: string) {
    return await this.testService.findOneById(Number(id));
  }
  // GIVE ALL USERS FROM DB TEST
  @Get('extra/users')
  async getUsers() {
    return await this.testService.findAll();
  }
  // CREATE USER TO DB TEST
  @Post('extra/users')
  async createUser(@Body() dto: CreateUserDto) {
    return await this.testService.create(dto);
  }
  // GIVE USERS FROM DB TEST
  @Get('extra/users/:number')
  async takerUsers(@Param('number') number: string) {
    return await this.testService.takerUsers(Number(number));
  }
}
