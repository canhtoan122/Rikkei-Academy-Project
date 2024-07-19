import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        private userRepository : UsersRepository
    ){
        
    }
    getUser(){
        const users = this.userRepository.getUsers();
        return users;
    }
    create(createUserDTO:CreateUserDTO){
        const user = this.userRepository.create(createUserDTO);
        return user;
    }
    getUserById(id:number){
        const user = this.userRepository.getUserById(id);
        return user;
    }
    update(id: number, updateUserDTO:UpdateUserDTO){
        const user = this.userRepository.update(+id, updateUserDTO);
        return user;
    }
    async remove(id: number){
        return await this.userRepository.remove(id);
    }
}
