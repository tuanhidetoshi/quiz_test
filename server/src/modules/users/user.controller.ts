import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/modules/users/user.service';

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getUser(): string {
        return 'User Service is up'
    }
}
