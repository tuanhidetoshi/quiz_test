import { Controller, Get } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getAuth(): string {
        return 'Auth Service is up'
    }
}
