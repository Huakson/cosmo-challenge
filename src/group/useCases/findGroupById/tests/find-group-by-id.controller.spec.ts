/* eslint-disable import/no-extraneous-dependencies */
import { HttpException } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { Group } from '../../../entities/group.entitie';
import { FindGroupByIdController } from '../find-group-by-id.controller';
import { FindGroupByIdDTO } from '../find-group-by-id.dto';
import { FindGroupByIdService } from '../find-group-by-id.service';

const groupMockedValues: Group = {
  name: 'testGroup',
  description: 'testDesc',
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const findGroupByIdMockDTO: FindGroupByIdDTO = {
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

describe('Find group by ID', () => {
  let controller: FindGroupByIdController;
  let service: FindGroupByIdService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [FindGroupByIdController],
      providers: [
        {
          provide: FindGroupByIdService,
          useValue: {
            execute: jest.fn().mockResolvedValue(groupMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<FindGroupByIdController>(
      FindGroupByIdController,
    );
    service = moduleRef.get<FindGroupByIdService>(FindGroupByIdService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond with the group returned by the service', async () => {
    const result = await controller.execute(findGroupByIdMockDTO);
    expect(result).toEqual(groupMockedValues);
  });

  it('should throw an exception', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(
        new HttpException('Unable to access database', 400),
      );

    expect(controller.execute(findGroupByIdMockDTO)).rejects.toThrowError();
  });
});
