import { Inject, Injectable } from '@nestjs/common';
import { DATABASE_CONNECTION } from 'src/infrastructure/database/database.contants';
import { UpdateUserDto } from './dto/update-user.dto';
// import { tests } from 'src/infrastructure/database/schema/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private db: any,
  ) {}
  create(dto) {
    // return this.db.insert(tests).values(dto).returning();
    return 'okay';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
