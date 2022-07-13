import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/database/models/user.model';
import { LoginDto } from 'src/dto/login.dto';
import { RegisterDto } from 'src/dto/register.dto';
import { UsersService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(body: RegisterDto): Promise<User | never> {
    const { userId } = body;
    const user = this.userService.findUserById(userId);

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    return this.userService.create(body);
  }

  async login(body: LoginDto) {
    const { userId } = body;
    const user = this.userService.findUserById(userId);

    if (!user) {
      throw new NotFoundException('User is not existed');
    }

    const token = this.generateToken(userId);
    return { user, token };
  }

  validateUser(userId: string): Promise<User | null> {
    return this.userService.findUserById(userId);
  }

  private async generateToken(userId: string): Promise<string> {
    const token = await this.jwtService.signAsync({ id: userId });
    return token;
  }
}
