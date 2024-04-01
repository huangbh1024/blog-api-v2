import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: '新增用户' })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.createOrSave(createUserDto);
    return null;
  }
}
