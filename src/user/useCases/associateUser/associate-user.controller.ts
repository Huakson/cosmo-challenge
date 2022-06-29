import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { AssociateUserDTO } from './associate-user.dto';
import { AssociateUserService } from './associate-user.service';

@Controller('user')
export class AssociateUserController {
  constructor(private associateUserService: AssociateUserService) {}

  @Post('associate-user')
  execute(@Body() data: AssociateUserDTO) {
    try {
      return this.associateUserService.execute(data);
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
