import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateBlogDto) {
    return this.prisma.blogs.create({ data });
  }

  findAll() {
    return this.prisma.blogs.findMany({ include: { user: true } });
  }

  findOne(id: number) {
    return this.prisma.blogs.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  update(id: number, data: UpdateBlogDto) {
    return this.prisma.blogs.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.blogs.delete({ where: { id } });
  }
}
