/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { PrismaModule } from '../../../../prisma/prisma.module';
import { Group } from '../../../entities/group.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindAllGroupsService } from '../find-all-groups.service';

const groupsMockInDB: Group[] = [
  {
    name: 'testGroup',
    description: 'testDesc',
    id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
  },
  {
    name: 'testGroup2',
    description: 'testDesc2',
    id: '433d-875e-c1db34b59258-4c3fc7df-8e65',
  },
];

describe('Find all groups service', () => {
  let service: FindAllGroupsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        FindAllGroupsService,
        {
          provide: RepositoryPrisma,
          useValue: {
            findAll: jest.fn().mockReturnValue(groupsMockInDB),
          },
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = moduleRef.get<FindAllGroupsService>(FindAllGroupsService);
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the groups returned in the database', async () => {
    const result = await service.execute();
    expect(result).toEqual(groupsMockInDB);
  });
});
