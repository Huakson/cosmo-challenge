import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Put,
} from '@nestjs/common';

import { UpdateGroupDTO } from './update-group.dto';
import { UpdateGroupService } from './update-group.service';

@Controller('group')
export class UpdateGroupController {
  constructor(private updateGroupService: UpdateGroupService) {}

  @Put('update')
  execute(@Body() data: UpdateGroupDTO) {
    try {
      return this.updateGroupService.execute(data);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
