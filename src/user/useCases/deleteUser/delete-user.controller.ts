import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { DeleteUserDTO } from './delete-user-dto';
import { DeleteUserService } from './delete-user.service';

@Controller('user')
export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  @Post('delete-user')
  execute(@Body() data: DeleteUserDTO) {
    try {
      return this.deleteUserService.execute(data);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
