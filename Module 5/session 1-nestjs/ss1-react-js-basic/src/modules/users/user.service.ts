import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository){}
  getHello(){
    return this.userRepository.getHello();
  }
  getUser(){
    const users = this.userRepository.getUser();
    return users;
  }
}
