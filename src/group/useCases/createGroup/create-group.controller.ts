import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { CreateGroupDTO } from './create-group.dto';
import { CreateGroupService } from './create-group.service';

@Controller('group')
export class CreateGroupController {
  constructor(private createGroupService: CreateGroupService) {}

  @Post('create-group')
  execute(@Body() data: CreateGroupDTO) {
    try {
      return this.createGroupService.execute(data);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
