import { Module } from '@nestjs/common';

import { GroupModule } from './group/group.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, GroupModule, UserModule],
})
export class AppModule {}
