import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService){}
    @Get()
    getUser(){
        return this.usersService.getUser();
    }
    @Get(`:id`)
    getUserById(@Param('id') id:number){
        return this.usersService.getUserById(+id);
    }
    @Post()
    create(@Body() createUserDTO:CreateUserDTO){
        return this.usersService.create(createUserDTO);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDTO:UpdateUserDTO){
        return this.usersService.update(+id, updateUserDTO);
    }
    @Delete(':id')
    remove(@Param('id') id:number){
        return this.usersService.remove(+id);
    }
}
