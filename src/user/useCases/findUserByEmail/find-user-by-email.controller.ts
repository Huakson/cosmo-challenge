import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { FindUserByEmailDTO } from './find-user-by-email.dto';
import { FindUserByEmailService } from './find-user-by-email.service';

@Controller('user')
export class FindUserByEmailController {
  constructor(private findUserByEmailService: FindUserByEmailService) {}

  @Post('find-by-email')
  execute(@Body() data: FindUserByEmailDTO) {
    try {
      return this.findUserByEmailService.execute(data);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
