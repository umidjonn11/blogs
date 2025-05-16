import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ default: 'lustrum22@gmail.com' })
  @IsOptional()
  @IsString()
  email: string;
  @ApiProperty({ default: 'NIaM.1234' })
  @IsString()
  password: string;
}