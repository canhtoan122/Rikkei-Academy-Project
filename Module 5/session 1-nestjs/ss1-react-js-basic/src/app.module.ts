import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
