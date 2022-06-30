/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { Group } from '../../../../group/entities/group.entitie';
import { GroupModule } from '../../../../group/group.module';
import { FindGroupByIdService } from '../../../../group/useCases/findGroupById/find-group-by-id.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { User } from '../../../entities/user.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindUserByIdService } from '../../findUserById/find-user-by-id.service';
import { AssociateUserDTO } from '../associate-user.dto';
import { AssociateUserService } from '../associate-user.service';

const userMockedValues: User = {
  email: 'test@test.com',
  firstName: 'test',
  id: '8e65-433d-875e-c1db34b59258-4c3fc7df',
  lastName: 'test',
  accountId: '',
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const associateUserMockedDTO: AssociateUserDTO = {
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
  userId: '8e65-433d-875e-c1db34b59258-4c3fc7df',
};

const groupMockedValues: Group = {
  name: 'testGroup',
  description: 'testDesc',
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

describe('Associate user service', () => {
  let service: AssociateUserService;
  let findUserByIdService: FindUserByIdService;
  let findGroupByIdService: FindGroupByIdService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AssociateUserService,
        {
          provide: RepositoryPrisma,
          useValue: {
            associateUser: jest.fn().mockReturnValue(userMockedValues),
          },
        },
        {
          provide: FindUserByIdService,
          useValue: {
            execute: jest.fn().mockReturnValue(userMockedValues),
          },
        },
        {
          provide: FindGroupByIdService,
          useValue: {
            execute: jest.fn().mockReturnValue(groupMockedValues),
          },
        },
      ],
      imports: [PrismaModule, GroupModule],
    }).compile();

    service = moduleRef.get<AssociateUserService>(AssociateUserService);

    findUserByIdService =
      moduleRef.get<FindUserByIdService>(FindUserByIdService);

    findGroupByIdService =
      moduleRef.get<FindGroupByIdService>(FindGroupByIdService);
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the user created in the database', async () => {
    const result = await service.execute(associateUserMockedDTO);
    expect(result.groupId).toEqual(associateUserMockedDTO.groupId);
  });

  it('should throw an user doenst exist exception', () => {
    jest.spyOn(findUserByIdService, 'execute').mockReturnValueOnce(null);

    expect(service.execute(associateUserMockedDTO)).rejects.toThrowError();
  });

  it('should throw an group doenst exist exception', () => {
    jest.spyOn(findUserByIdService, 'execute').mockReturnValueOnce(null);
    jest.spyOn(findGroupByIdService, 'execute').mockReturnValueOnce(null);

    expect(service.execute(associateUserMockedDTO)).rejects.toThrowError();
  });
});
