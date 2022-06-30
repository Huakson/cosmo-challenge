import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { FindGroupByNameDTO } from './find-group-by-name.dto';
import { FindGroupByNameService } from './find-group-by-name.service';

@Controller('group')
export class FindGroupByNameController {
  constructor(private findGroupByNameService: FindGroupByNameService) {}

  @Get('find-by-name')
  execute(@Body() data: FindGroupByNameDTO) {
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
