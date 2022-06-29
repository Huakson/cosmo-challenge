/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';
import { GroupUpdate } from 'src/group/entities/group-update';

import { PrismaModule } from '../../../../prisma/prisma.module';
import { Group } from '../../../entities/group.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindGroupByNameService } from '../../findGroupByName/find-group-by-name.service';
import { CreateGroupDTO } from '../create-group.dto';
import { CreateGroupService } from '../create-group.service';

const groupMockInDB: GroupUpdate = {
  name: 'testGroup',
  description: 'testDesc',
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const createGroupMockedDTO: CreateGroupDTO = {
  name: 'testGroup',
  description: 'testDesc',
};

const findGroupByNameMock: Promise<Group> = new Promise((resolve) => {
  const group: Group = {
    name: 'testGroup',
    description: 'testDesc',
    id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
  };
  resolve(group);
});

describe('Create group service', () => {
  let service: CreateGroupService;
  let findGroupByNameService: FindGroupByNameService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateGroupService,
        {
          provide: RepositoryPrisma,
          useValue: {
            createGroup: jest.fn().mockReturnValue(groupMockInDB),
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

    service = moduleRef.get<CreateGroupService>(CreateGroupService);
    findGroupByNameService = moduleRef.get<FindGroupByNameService>(
      FindGroupByNameService,
    );
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the group created in the database', async () => {
    const result = await service.execute(createGroupMockedDTO);
    expect(result).toEqual(groupMockInDB);
  });

  it('should handle if the group already exists', () => {
    jest
      .spyOn(findGroupByNameService, 'execute')
      .mockReturnValueOnce(findGroupByNameMock);

    expect(service.execute(createGroupMockedDTO)).rejects.toThrowError();
  });
});
