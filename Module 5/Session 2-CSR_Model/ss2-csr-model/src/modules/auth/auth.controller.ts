import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDTO } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){
        
    }
    @Post('register')
    async register(@Body() userDTO: RegisterDTO){
        return await this.authService.register(userDTO);
    }
}
