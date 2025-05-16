import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty({ default: 'Save the world' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    default:
      'Nowadays air pollution is dangeroues problem that may lead to even fatal outcomes...',
  })
  @IsNotEmpty()
  content: string;
  
  @ApiProperty({ default: 1 })
  @IsNotEmpty()
  userId: number;
}
