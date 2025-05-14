import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { BlogsModule } from './blogs/blogs.module';
import { PrismaService } from 'prisma/prisma.service';
@Module({
  imports: [UsersModule, BlogsModule, CommentsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
