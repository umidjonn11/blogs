import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class updateUserDto {
  @IsOptional()
  full_name?: string;

  @IsOptional()
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  password?: string;
}
