import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../user/database/user.entity';
// import { AccessToken } from './types/AccessToken';
import { UserService } from '../user/user.service';
// import { RegisterRequestDto } from './dtos/register-request.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    // Bước 1: Check xem email có trong DB hay không
    const user: User = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    // Bước 2: Hash lại password (Mã hóa ngược password, xem có giống như đoạn mã hóa ở trong DB hay không)
    const isMatch: boolean = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    // Bước 3: Nếu password đúng, trả về user
    return user;
  }

  async login(user: User) {
    const { email, password } = user;
    const checkUser = await this.validateUser(email, password);
    const payload = { email: user.email, id: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  async register(user) {
    // Bước 1: Check xem email có tồn tại hay chưa
    const existingUser = await this.usersService.findOneByEmail(user.email);
    if (existingUser) {
      throw new BadRequestException('email already exists');
    }
    // Bước 2: Hash Password (Mã hóa password)
    const hashedPassword = await bcrypt.hash(user.password, 10);
    // Bước 3: Lưu user vào DB
    const newUser: User = { ...user, password: hashedPassword };
    return await this.usersService.create(newUser);
  }
}