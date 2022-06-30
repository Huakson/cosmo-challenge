import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

import { FindAllUsersService } from './find-all-users.service';

@Controller('user')
export class FindAllUsersController {
  constructor(private findAllUsersService: FindAllUsersService) {}

  @Get('find-all')
  execute() {
    try {
      return this.findAllUsersService.execute();
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
