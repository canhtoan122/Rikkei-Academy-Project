import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/database/user.entity';
import { Repository } from 'typeorm';
import { RegisterDTO } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>,
    ){
        
    }
    async register(user: RegisterDTO){
        const {username, email, password } = user;
        const saltOrRounds = 10;
        const hashPass = await bcrypt.hash(password, saltOrRounds);
        const newUser = await this.userRepository.save({
            ...user,
            password: hashPass,
        });
        return newUser;
    }
}
