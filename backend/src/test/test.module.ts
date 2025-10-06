/**
 * =====================================================
 *  NAME    : test.module.ts
 *  DESCRIPTION: FOR FETCH API REST TEST FROM DATABASES TEST
 * =====================================================
 */

// DEPENDENCIES
import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';

// PACKAGER
@Module({
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
