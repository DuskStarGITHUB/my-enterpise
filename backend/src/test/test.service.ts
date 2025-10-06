/**
 * =====================================================
 *  NAME    : test.service.ts
 *  DESCRIPTION: FUNCTIONS FOR DB ACTIONS
 * =====================================================
 */

// DEPENDENCIES
import { Injectable } from '@nestjs/common';
import { PrismaClient as DBconexion } from '../../prisma/client';
import { PrismaClient as DBextra } from '../../prisma/Test';
import { CreateUserDto } from './create-user.dto';

// SERVICE
@Injectable()
export class TestService {
  // PRISMA
  private db = new DBconexion();
  private dbtest = new DBextra();
  // STATUS PRIMARY DATABASE
  async DBstatus() {
    try {
      // SUCESS
      await this.db.$connect();
      // DB NAME
      const dbNameResult = await this.db.$queryRaw<
        { dbName: string }[]
      >`SELECT DATABASE() as dbName;`;
      // VERSION
      const versionResult = await this.db.$queryRaw<
        { version: string }[]
      >`SELECT VERSION() as version;`;
      // HOST INFO
      const hostResult = await this.db.$queryRaw<
        { host: string }[]
      >`SELECT @@hostname as host;`;
      // MESSAGE RESPONSE
      return {
        success: true,
        message: 'DB PRYMARY ACTIVE',
        database: dbNameResult[0]?.dbName ?? 'UNKNOWN',
        host: hostResult[0]?.host ?? 'UNKNOWN',
        version: versionResult[0]?.version ?? 'UNKNOWN',
      };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        success: false,
        message: `DB PRYMARY NO ACTIVE:
        ${message}`,
      };
    } finally {
      await this.db.$disconnect();
    }
  }
  // STATUS SECONDARY DB TEST
  async DBstatus2() {
    try {
      // PRISMA
      await this.dbtest.$connect();
      // DB NAME
      const dbNameResult = await this.dbtest.$queryRaw<
        { dbName: string }[]
      >`SELECT DATABASE() as dbName;`;
      // VERSION
      const versionResult = await this.dbtest.$queryRaw<
        { version: string }[]
      >`SELECT VERSION() as version;`;
      // HOST
      const hostResult = await this.dbtest.$queryRaw<
        { host: string }[]
      >`SELECT @@hostname as host;`;
      // MESSAGE RESPONSE
      return {
        success: true,
        message: 'DB TEST ACTIVE',
        database: dbNameResult[0]?.dbName ?? 'UNKNOWN',
        host: hostResult[0]?.host ?? 'UNKNOWN',
        version: versionResult[0]?.version ?? 'UNKNOWN',
      };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        success: false,
        message: `NO ACTIVE DB TEST:
        ${message}`,
      };
    } finally {
      await this.db.$disconnect();
    }
  }
  // DB TEST ALL USERS
  async findAll() {
    return await this.dbtest.registers_test.findMany();
  }
  // DB TEST CREATE USER
  async create(data: CreateUserDto) {
    return await this.dbtest.registers_test.create({ data });
  }
  // DB TEST FIND USER
  async findOneById(id: number) {
    return await this.dbtest.registers_test.findUnique({
      where: { id_register: id },
    });
  }
  // DB TEST TAKER USERS
  async takerUsers(number: number) {
    return await this.dbtest.registers_test.findMany({ take: number });
  }
}
