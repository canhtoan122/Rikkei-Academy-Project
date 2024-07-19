import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './database/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
    
    constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>
      // Có thể thêm Repository khác ở đây
      // @InjectRepository(Product)
      // private productRepository: Repository<Product>
    ){}
    getUsers(){
        return this.userRepository.find();
    }
    getUserById(id:number){
      const user = this.userRepository.find({
        where: {
            id: id,
        },
      })
      return user;
    }
    async create(createUserDTO:CreateUserDTO){
      const user = await this.userRepository.save(createUserDTO);
      return user;
    }
    update(id: number, updateUserDTO:UpdateUserDTO){
      const user = this.userRepository.update(+id, updateUserDTO);
      return `This action updates a #${id} product`;
    }
    async remove(id: number){
      const user = this.userRepository.findOne({ where: { id } });
      if(!user){
        throw new NotFoundException(' User not found!');
      }
      return await this.userRepository.delete(id);
    }
}
