import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { CreateUserDTO } from './create-user.dto';
import { CreateUserService } from './create-user.service';

@Controller('user')
export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  @Post('create-user')
  execute(@Body() data: CreateUserDTO) {
    try {
      return this.createUserService.execute(data);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
