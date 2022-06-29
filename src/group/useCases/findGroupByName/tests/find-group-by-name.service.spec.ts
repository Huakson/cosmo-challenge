/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { PrismaModule } from '../../../../prisma/prisma.module';
import { Group } from '../../../entities/group.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindGroupByNameDTO } from '../find-group-by-name.dto';
import { FindGroupByNameService } from '../find-group-by-name.service';

const groupMockInDB: Group = {
  name: 'testGroup',
  description: 'testDesc',
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const findGroupByNameMockedDTO: FindGroupByNameDTO = {
  name: 'testGroup',
};

describe('Find group by name service', () => {
  let service: FindGroupByNameService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        FindGroupByNameService,
        {
          provide: RepositoryPrisma,
          useValue: {
            findByName: jest.fn().mockReturnValue(groupMockInDB),
          },
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = moduleRef.get<FindGroupByNameService>(FindGroupByNameService);
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the group returned in the database', async () => {
    const result = await service.execute(findGroupByNameMockedDTO);
    expect(result).toEqual(groupMockInDB);
  });
});
