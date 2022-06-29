/* eslint-disable import/no-extraneous-dependencies */
import { HttpException } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { Group } from '../../../entities/group.entitie';
import { CreateGroupController } from '../create-group.controller';
import { CreateGroupDTO } from '../create-group.dto';
import { CreateGroupService } from '../create-group.service';

const groupMockedValues: Group = {
  name: 'testGroup',
  description: 'testDesc',
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const createGroupMockedDTO: CreateGroupDTO = {
  name: 'testGroup',
  description: 'testDesc',
};

describe('Create group', () => {
  let controller: CreateGroupController;
  let service: CreateGroupService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CreateGroupController],
      providers: [
        {
          provide: CreateGroupService,
          useValue: {
            execute: jest.fn().mockResolvedValue(groupMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<CreateGroupController>(CreateGroupController);
    service = moduleRef.get<CreateGroupService>(CreateGroupService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond with the group created by the service', async () => {
    const result = await controller.execute(createGroupMockedDTO);
    expect(result).toEqual(groupMockedValues);
  });

  it('should throw an exception', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new HttpException('Group exists', 400));

    expect(controller.execute(createGroupMockedDTO)).rejects.toThrowError();
  });
});
