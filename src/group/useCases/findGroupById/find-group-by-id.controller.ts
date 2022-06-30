import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { FindGroupByIdDTO } from './find-group-by-id.dto';
import { FindGroupByIdService } from './find-group-by-id.service';

@Controller('group')
export class FindGroupByIdController {
  constructor(private findGroupByNameService: FindGroupByIdService) {}

  @Get('find-by-id')
  execute(@Body() data: FindGroupByIdDTO) {
    try {
      return this.findGroupByNameService.execute(data);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
