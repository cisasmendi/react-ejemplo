import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const user = this.findOne(id);
    if (user) {
      Object.assign(user, updateUserDto);
    }
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  remove(id: number): boolean {
    this.users = this.users.filter(user => user.id !== id);
    return true;
  }
}
