/* eslint-disable import/no-extraneous-dependencies */
import { HttpException } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { Group } from '../../../entities/group.entitie';
import { FindAllGroupsController } from '../find-all-groups.controller';
import { FindAllGroupsService } from '../find-all-groups.service';

const allGroupsMockedValues: Group[] = [
  {
    name: 'testGroup',
    description: 'testDesc',
    id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
  },
  {
    name: 'testGroup2',
    description: 'testDesc2',
    id: '5ff88c62-31f4-4af8-bd74-89bd5d92100b',
  },
];

describe('Find all groups', () => {
  let controller: FindAllGroupsController;
  let service: FindAllGroupsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [FindAllGroupsController],
      providers: [
        {
          provide: FindAllGroupsService,
          useValue: {
            execute: jest.fn().mockResolvedValue(allGroupsMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<FindAllGroupsController>(
      FindAllGroupsController,
    );
    service = moduleRef.get<FindAllGroupsService>(FindAllGroupsService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond with the groups returned by the service', async () => {
    const result = await controller.execute();
    expect(result).toEqual(allGroupsMockedValues);
  });

  it('should throw an exception', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(
        new HttpException('Unable to access database', 400),
      );

    expect(controller.execute()).rejects.toThrowError();
  });
});
