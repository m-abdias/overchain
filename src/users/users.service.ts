import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.repo.create({
      username: createUserDto.username,
      password: createUserDto.password,
      name: createUserDto.name,
      email: createUserDto.email,
      phonenumber: createUserDto.phonenumber,
    });

    await this.repo.insert(newUser);
    return newUser;
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.repo.findOneBy({ id });
    const { username, password, name, email, phonenumber } = updateUserDto;
    user.username = username ? username : user.username;
    user.password = password ? password : user.password;
    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.phonenumber = phonenumber ? phonenumber : user.phonenumber;
    return this.repo.save(user);
  }

  async remove(id: number) {
    await this.repo.delete({ id });
  }
}
