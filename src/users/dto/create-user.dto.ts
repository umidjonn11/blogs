import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ default: 'Umid Umedov' })
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({ default: 'Kozya' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ default: 'lus000@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ default: 'qwerty1234' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({default:"ADMIN"})
  @IsNotEmpty()
  role: string;
}
