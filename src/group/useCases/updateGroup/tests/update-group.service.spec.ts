/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { PrismaModule } from '../../../../prisma/prisma.module';
import { Group } from '../../../entities/group.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindGroupByNameService } from '../../findGroupByName/find-group-by-name.service';
import { UpdateGroupDTO } from '../update-group.dto';
import { UpdateGroupService } from '../update-group.service';

const groupMockInDB: Group = {
  name: 'testGroup updated',
  description: 'testDesc updated',
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const updateGroupMockDTO: UpdateGroupDTO = {
  name: 'testGroup updated',
  description: 'testDesc updated',
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const findGroupByNameMock: Promise<Group> = new Promise((resolve) => {
  const group: Group = {
    name: 'testGroup',
    description: 'testDesc',
    id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
  };
  resolve(group);
});

describe('Update group service', () => {
  let service: UpdateGroupService;
  let findGroupByNameService: FindGroupByNameService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UpdateGroupService,
        {
          provide: RepositoryPrisma,
          useValue: {
            update: jest.fn().mockReturnValue(groupMockInDB),
          },
        },
        {
          provide: FindGroupByNameService,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = moduleRef.get<UpdateGroupService>(UpdateGroupService);
    findGroupByNameService = moduleRef.get<FindGroupByNameService>(
      FindGroupByNameService,
    );
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the group updated returned in the database', async () => {
    const result = await service.execute(updateGroupMockDTO);
    expect(result).toEqual(groupMockInDB);
  });

  it('should handle if the group already exists', () => {
    jest
      .spyOn(findGroupByNameService, 'execute')
      .mockReturnValueOnce(findGroupByNameMock);

    expect(service.execute(updateGroupMockDTO)).rejects.toThrowError();
  });
});
