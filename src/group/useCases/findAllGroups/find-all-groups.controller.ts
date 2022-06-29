import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

import { FindAllGroupsService } from './find-all-groups.service';

@Controller('group')
export class FindAllGroupsController {
  constructor(private findAllGroupsService: FindAllGroupsService) {}

  @Get('find-all')
  execute() {
    try {
      return this.findAllGroupsService.execute();
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
