/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { User } from '../../../entities/user.entitie';
import { FindUserByGroupController } from '../find-user-by-group.controller';
import { FindUserByGroupDTO } from '../find-user-by-group.dto';
import { FindUserByGroupService } from '../find-user-by-group.service';

const userMockedValues: User = {
  email: 'test@test.com',
  firstName: 'test',
  id: '8e65-433d-875e-c1db34b59258-4c3fc7df',
  lastName: 'test',
  accountId: '',
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const findUserByGroupMockedDTO: FindUserByGroupDTO = {
  groupName: 'bots',
};

describe('Find user by group', () => {
  let controller: FindUserByGroupController;
  let service: FindUserByGroupService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [FindUserByGroupController],
      providers: [
        {
          provide: FindUserByGroupService,
          useValue: {
            execute: jest.fn().mockResolvedValue(userMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<FindUserByGroupController>(
      FindUserByGroupController,
    );
    service = moduleRef.get<FindUserByGroupService>(FindUserByGroupService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond object returned by service', async () => {
    const result = await controller.execute(findUserByGroupMockedDTO);
    expect(typeof result).toEqual('object');
  });
});
