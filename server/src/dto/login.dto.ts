import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  readonly userId: string;
}
