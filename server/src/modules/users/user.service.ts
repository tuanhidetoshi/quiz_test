import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/database/models/user.model';
import { RegisterDto } from 'src/dto/register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  create(register: RegisterDto) {
    return this.userModel.create({ id: register.userId });
  }

  async findUserById(id: string): Promise<User | null> {
    return this.userModel.findOne({ where: { id } });
  }
}
