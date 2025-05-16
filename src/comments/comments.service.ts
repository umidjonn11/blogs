import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateCommentDto) {
    return this.prisma.comments.create({
      data
    });
  }

  findAll() {
    return this.prisma.comments.findMany({
      include: { blogs: true, user: true },
    });
  }

  findOne(id: number) {
    return this.prisma.comments.findUnique({
      where: { id },
      include: { blogs: true, user: true },
    });
  }

  update(id: number, data: UpdateCommentDto) {
    return this.prisma.comments.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.comments.delete({ where: { id } });
  }
}
