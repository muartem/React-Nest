import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    // Add your own logic here to compare the user's password
    // For example, if you're storing hashed passwords, compare the hashed password
    if (user && await bcrypt.compare(password, user.password)) { // replace with actual password comparison logic
      // Return only the necessary fields
      return { id: user.id, username: user.username };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
