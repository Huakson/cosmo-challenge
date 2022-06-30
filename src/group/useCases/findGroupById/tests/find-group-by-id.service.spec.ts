/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { PrismaModule } from '../../../../prisma/prisma.module';
import { Group } from '../../../entities/group.entitie';
import { RepositoryPrisma } from '../../../repository/implementations/prisma.repository';
import { FindGroupByIdService } from '../find-group-by-id.service';

const groupMockInDB: Group = {
  name: 'testGroup',
  description: 'testDesc',
  id: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};
const mockedGroupId: string = '4c3fc7df-8e65-433d-875e-c1db34b59258';
describe('Find group by ID service', () => {
  let service: FindGroupByIdService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        FindGroupByIdService,
        {
          provide: RepositoryPrisma,
          useValue: {
            findById: jest.fn().mockReturnValue(groupMockInDB),
          },
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = moduleRef.get<FindGroupByIdService>(FindGroupByIdService);
  });

  it('shoud be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the group returned in the database', async () => {
    const result = await service.execute({ groupId: mockedGroupId });
    expect(result).toEqual(groupMockInDB);
  });
});
