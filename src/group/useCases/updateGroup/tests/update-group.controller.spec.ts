/* eslint-disable import/no-extraneous-dependencies */
import { HttpException } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { Group } from '../../../entities/group.entitie';
import { UpdateGroupController } from '../update-group.controller';
import { UpdateGroupDTO } from '../update-group.dto';
import { UpdateGroupService } from '../update-group.service';

const groupMockedValues: Group = {
  name: 'testGroup updated',
  description: 'testDesc updated',
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const updateGroupMockedDTO: UpdateGroupDTO = {
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
  name: 'testGroup updated',
  description: 'testDesc updated',
};

describe('Update group', () => {
  let controller: UpdateGroupController;
  let service: UpdateGroupService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UpdateGroupController],
      providers: [
        {
          provide: UpdateGroupService,
          useValue: {
            execute: jest.fn().mockResolvedValue(groupMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<UpdateGroupController>(UpdateGroupController);
    service = moduleRef.get<UpdateGroupService>(UpdateGroupService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond with the group returned by the service', async () => {
    const result = await controller.execute(updateGroupMockedDTO);
    expect(result).toEqual(groupMockedValues);
  });

  it('should throw an exception', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new HttpException('Group exists', 400));

    expect(controller.execute(updateGroupMockedDTO)).rejects.toThrowError();
  });
});
