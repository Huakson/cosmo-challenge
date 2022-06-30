/* eslint-disable import/no-extraneous-dependencies */
import { HttpException } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { Group } from '../../../entities/group.entitie';
import { FindGroupByNameController } from '../find-group-by-name.controller';
import { FindGroupByNameDTO } from '../find-group-by-name.dto';
import { FindGroupByNameService } from '../find-group-by-name.service';

const groupMockedValues: Group = {
  name: 'testGroup',
  description: 'testDesc',
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const findGroupByNameMockedDTO: FindGroupByNameDTO = {
  name: 'testGroup',
};

describe('Find group by name', () => {
  let controller: FindGroupByNameController;
  let service: FindGroupByNameService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [FindGroupByNameController],
      providers: [
        {
          provide: FindGroupByNameService,
          useValue: {
            execute: jest.fn().mockResolvedValue(groupMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<FindGroupByNameController>(
      FindGroupByNameController,
    );
    service = moduleRef.get<FindGroupByNameService>(FindGroupByNameService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond with the groups returned by the service', async () => {
    const result = await controller.execute(findGroupByNameMockedDTO);
    expect(result).toEqual(groupMockedValues);
  });

  it('should throw an exception', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(
        new HttpException('Unable to access database', 400),
      );

    expect(controller.execute(findGroupByNameMockedDTO)).rejects.toThrowError();
  });
});
