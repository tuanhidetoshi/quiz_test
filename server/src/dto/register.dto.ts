import { IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  readonly userId: string;
}
