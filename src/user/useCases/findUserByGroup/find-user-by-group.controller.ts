import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { FindUserByGroupDTO } from './find-user-by-group.dto';
import { FindUserByGroupService } from './find-user-by-group.service';

@Controller('user')
export class FindUserByGroupController {
  constructor(private findUserByGroupService: FindUserByGroupService) {}

  @Get('find-by-group')
  execute(@Body() data: FindUserByGroupDTO) {
    try {
      return this.findUserByGroupService.execute(data);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
