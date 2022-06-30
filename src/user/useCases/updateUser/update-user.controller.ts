import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Put,
} from '@nestjs/common';

import { UpdateUserDTO } from './update-user.dto';
import { UpdateUserService } from './update-user.service';

@Controller('user')
export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  @Put('update-user')
  execute(@Body() data: UpdateUserDTO) {
    try {
      return this.updateUserService.execute(data);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
