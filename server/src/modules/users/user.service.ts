import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/database/models/user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    signIn(user: User) {
        return;
    }

    async findUserById(id: string): Promise<User|null> {
        // return this.usersRepository.findOne();
        return;
    }
}
