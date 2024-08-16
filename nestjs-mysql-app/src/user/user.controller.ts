import { Controller, Post, Body, Get, Param, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add-user')
  async addUser(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
  ) {
    const newUser = await this.userService.createUser({ username, password, name, email, phone });
    console.log('User added:', newUser);
    return newUser;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get-user/:id')
  async getUser(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }
}
