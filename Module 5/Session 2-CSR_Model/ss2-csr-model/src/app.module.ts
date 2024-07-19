import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/database/user.entity';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test_db',
    entities: [User],
    synchronize: true,
  }),UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
