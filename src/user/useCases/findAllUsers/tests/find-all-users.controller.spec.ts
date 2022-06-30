/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { User } from '../../../entities/user.entitie';
import { FindAllUsersController } from '../find-all-users.controller';
import { FindAllUsersService } from '../find-all-users.service';

const usersMockedValues: User[] = [
  {
    email: 'test@test.com',
    firstName: 'test',
    id: '8e65-433d-875e-c1db34b59258-4c3fc7df',
    lastName: 'test',
    accountId: '',
    groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
  },
];

describe('Find all users', () => {
  let controller: FindAllUsersController;
  let service: FindAllUsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [FindAllUsersController],
      providers: [
        {
          provide: FindAllUsersService,
          useValue: {
            execute: jest.fn().mockResolvedValue(usersMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<FindAllUsersController>(FindAllUsersController);
    service = moduleRef.get<FindAllUsersService>(FindAllUsersService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond with the users by the service', async () => {
    const result = await controller.execute();
    expect(result).toEqual(usersMockedValues);
  });
});
