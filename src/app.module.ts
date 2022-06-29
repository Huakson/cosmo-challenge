import { Module } from '@nestjs/common';

import { GroupModule } from './group/group.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, GroupModule],
})
export class AppModule {}
