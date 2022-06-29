/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { GroupModule } from '../../../../group/group.module';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { User } from '../../../entities/user.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindUserByIdService } from '../../findUserById/find-user-by-id.service';
import { DeleteUserDTO } from '../delete-user-dto';
import { DeleteUserService } from '../delete-user.service';

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

const deleteUserMockedDTO: DeleteUserDTO = {
  userId: '8e65-433d-875e-c1db34b59258-4c3fc7df',
};

describe('Delete user service', () => {
  let service: DeleteUserService;
  let findUserByIdService: FindUserByIdService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        DeleteUserService,
        {
          provide: RepositoryPrisma,
          useValue: {
            deleteUser: jest.fn().mockReturnValue(userMockedValues),
          },
        },
        {
          provide: FindUserByIdService,
          useValue: {
            execute: jest.fn().mockReturnValue(userMockedValues),
          },
        },
      ],
      imports: [PrismaModule, GroupModule],
    }).compile();

    service = moduleRef.get<DeleteUserService>(DeleteUserService);

    findUserByIdService =
      moduleRef.get<FindUserByIdService>(FindUserByIdService);
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the user deleted in the database', async () => {
    const result = await service.execute(deleteUserMockedDTO);
    expect(result.id).toEqual(deleteUserMockedDTO.userId);
  });

  it('should throw an user doenst exist exception', () => {
    jest.spyOn(findUserByIdService, 'execute').mockReturnValueOnce(null);

    expect(service.execute(deleteUserMockedDTO)).rejects.toThrowError();
  });
});
