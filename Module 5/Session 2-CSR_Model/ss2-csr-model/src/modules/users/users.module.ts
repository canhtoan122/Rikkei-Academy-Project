import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './database/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],// Có thể import entity mới vào đây User, Product
  controllers: [UsersController],
  providers: [UsersService, UsersRepository]
})
export class UsersModule {}
