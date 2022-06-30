/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { PrismaModule } from '../../../../prisma/prisma.module';
import { User } from '../../../entities/user.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindAllUsersService } from '../find-all-users.service';

const usersMockedValues: Promise<User[]> = new Promise((resolve) => {
  const users: User[] = [
    {
      email: 'test@test.com',
      firstName: 'test',
      id: '8e65-433d-875e-c1db34b59258-4c3fc7df',
      lastName: 'test',
      accountId: '',
      groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
    },
  ];

  resolve(users);
});

describe('Find all users service', () => {
  let service: FindAllUsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        FindAllUsersService,
        {
          provide: RepositoryPrisma,
          useValue: {
            findAll: jest.fn().mockReturnValue(usersMockedValues),
          },
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = moduleRef.get<FindAllUsersService>(FindAllUsersService);
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the users in the database', async () => {
    const result = await service.execute();
    expect(result).toHaveLength(1);
  });
});
