import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/security/jwt-strategy';

@Module({
  imports:[ JwtModule.register({
    secret: process.env.JWT_SECRET || 'mySuperSecretKey', // Use env variables in real apps
    signOptions: { expiresIn: '1h' },
  }),],
  controllers: [UsersController],
  providers: [UsersService,PrismaService,JwtStrategy],
})
export class UsersModule {}
