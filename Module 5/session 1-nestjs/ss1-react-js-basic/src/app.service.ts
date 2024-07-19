import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository){}
  getHello(){
    return this.appRepository.getHello();
  }
  getUser(){
    const users = this.appRepository.getUser();
    const resUser = users.filter(users => users.age%2 === 0);
    return resUser;
  }
}
