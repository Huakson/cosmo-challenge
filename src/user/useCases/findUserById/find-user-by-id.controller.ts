import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { FindUserByIdDTO } from './find-user-by-id.dto';
import { FindUserByIdService } from './find-user-by-id.service';

@Controller('user')
export class FindUserByIdController {
  constructor(private findUserByIdService: FindUserByIdService) {}

  @Get('find-by-id')
  execute(@Body() data: FindUserByIdDTO) {
    try {
      return this.findUserByIdService.execute(data);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
