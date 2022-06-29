/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { PrismaModule } from '../../../../prisma/prisma.module';
import { User } from '../../../entities/user.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindUserByEmailDTO } from '../find-user-by-email.dto';
import { FindUserByEmailService } from '../find-user-by-email.service';

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

const emailMocked: FindUserByEmailDTO = {
  userEmail: 'test@test.com',
};

describe('Find user by email service', () => {
  let service: FindUserByEmailService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        FindUserByEmailService,
        {
          provide: RepositoryPrisma,
          useValue: {
            findByEmail: jest.fn().mockReturnValue(userMockedValues),
          },
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = moduleRef.get<FindUserByEmailService>(FindUserByEmailService);
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the user in the database', async () => {
    const result = await service.execute(emailMocked);
    expect(result.email).toEqual(emailMocked.userEmail);
  });
});
