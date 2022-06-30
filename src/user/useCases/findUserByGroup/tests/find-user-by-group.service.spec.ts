/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { PrismaModule } from '../../../../prisma/prisma.module';
import { User } from '../../../entities/user.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindUserByGroupDTO } from '../find-user-by-group.dto';
import { FindUserByGroupService } from '../find-user-by-group.service';

const userMockedValues: Promise<User> = new Promise((resolve) => {
  const user: User = {
    email: 'test@test.com',
    firstName: 'test',
    id: '8e65-433d-875e-c1db34b59258-4c3fc7df',
    lastName: 'test',
    accountId: '',
    groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
  };

  resolve(user);
});

const groupNameMocked: FindUserByGroupDTO = {
  groupName: 'bots',
};

describe('Find user by group service', () => {
  let service: FindUserByGroupService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        FindUserByGroupService,
        {
          provide: RepositoryPrisma,
          useValue: {
            findByGroup: jest.fn().mockReturnValue(userMockedValues),
          },
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = moduleRef.get<FindUserByGroupService>(FindUserByGroupService);
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return object returned by database', async () => {
    const result = await service.execute(groupNameMocked);
    expect(typeof result).toEqual('object');
  });
});
