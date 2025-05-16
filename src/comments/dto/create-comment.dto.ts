import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({default:"Thats cool"})
  @IsNotEmpty()
  text: string;

  @ApiProperty({default:1})
  @IsNotEmpty()
  blogId: number;

  @ApiProperty({default:1})
  @IsNotEmpty()
  userId: number;
}
