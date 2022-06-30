/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { GroupModule } from '../../../../group/group.module';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { User } from '../../../entities/user.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindUserByEmailService } from '../../findUserByEmail/find-user-by-email.service';
import { CreateUserDTO } from '../create-user.dto';
import { CreateUserService } from '../create-user.service';

const userMockedValues: Promise<User> = new Promise((resolve) => {
  const user = {
    email: 'test@test.com',
    firstName: 'test',
    id: '8e65-433d-875e-c1db34b59258-4c3fc7df',
    lastName: 'test',
    accountId: '',
    groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
  };

  resolve(user);
});

const createUserMockedDTO: CreateUserDTO = {
  email: 'test@test.com',
  firstName: 'test',
  lastName: 'test',
  accountId: '',
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

describe('Create user service', () => {
  let service: CreateUserService;
  let findUserByEmailService: FindUserByEmailService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: RepositoryPrisma,
          useValue: {
            createUser: jest.fn().mockReturnValue(userMockedValues),
          },
        },
        {
          provide: FindUserByEmailService,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
      imports: [PrismaModule, GroupModule],
    }).compile();

    service = moduleRef.get<CreateUserService>(CreateUserService);

    findUserByEmailService = moduleRef.get<FindUserByEmailService>(
      FindUserByEmailService,
    );
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the user created in the database', async () => {
    const result = await service.execute(createUserMockedDTO);
    expect(result.groupId).toEqual(createUserMockedDTO.groupId);
  });

  it('should throw an user doenst exist exception', () => {
    jest
      .spyOn(findUserByEmailService, 'execute')
      .mockReturnValueOnce(userMockedValues);

    expect(service.execute(createUserMockedDTO)).rejects.toThrowError();
  });
});
