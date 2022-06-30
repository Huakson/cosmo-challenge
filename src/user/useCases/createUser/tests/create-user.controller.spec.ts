/* eslint-disable import/no-extraneous-dependencies */
import { HttpException } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { User } from '../../../entities/user.entitie';
import { CreateUserController } from '../create-user.controller';
import { CreateUserDTO } from '../create-user.dto';
import { CreateUserService } from '../create-user.service';

const userMockedValues: User = {
  email: 'test@test.com',
  firstName: 'test',
  id: '8e65-433d-875e-c1db34b59258-4c3fc7df',
  lastName: 'test',
  accountId: '',
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const createUserMockedDTO: CreateUserDTO = {
  email: 'test@test.com',
  firstName: 'test',
  lastName: 'test',
  accountId: '',
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

describe('Create user', () => {
  let controller: CreateUserController;
  let service: CreateUserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CreateUserController],
      providers: [
        {
          provide: CreateUserService,
          useValue: {
            execute: jest.fn().mockResolvedValue(userMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<CreateUserController>(CreateUserController);
    service = moduleRef.get<CreateUserService>(CreateUserService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond with the user created by the service', async () => {
    const result = await controller.execute(createUserMockedDTO);
    expect(result).toEqual(userMockedValues);
  });

  it('should throw an User already exists exception', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new HttpException('User already exists', 400));

    expect(controller.execute(createUserMockedDTO)).rejects.toThrowError();
  });
});
