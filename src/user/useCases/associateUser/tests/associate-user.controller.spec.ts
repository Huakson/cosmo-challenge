/* eslint-disable import/no-extraneous-dependencies */
import { HttpException } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { User } from '../../../entities/user.entitie';
import { AssociateUserController } from '../associate-user.controller';
import { AssociateUserDTO } from '../associate-user.dto';
import { AssociateUserService } from '../associate-user.service';

const userMockedValues: User = {
  email: 'test@test.com',
  firstName: 'test',
  id: '8e65-433d-875e-c1db34b59258-4c3fc7df',
  lastName: 'test',
  accountId: '',
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const associateUserMockedDTO: AssociateUserDTO = {
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
  userId: '8e65-433d-875e-c1db34b59258-4c3fc7df',
};

describe('Associate user', () => {
  let controller: AssociateUserController;
  let service: AssociateUserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AssociateUserController],
      providers: [
        {
          provide: AssociateUserService,
          useValue: {
            execute: jest.fn().mockResolvedValue(userMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<AssociateUserController>(
      AssociateUserController,
    );
    service = moduleRef.get<AssociateUserService>(AssociateUserService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond with the user updated by the service', async () => {
    const result = await controller.execute(associateUserMockedDTO);
    expect(result).toEqual(userMockedValues);
  });

  it('should throw an user doenst exist exception', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new HttpException("User doesn't exist", 400));

    expect(controller.execute(associateUserMockedDTO)).rejects.toThrowError();
  });

  it('should throw an group doenst exist exception', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new HttpException("Group doesn't existt", 400));

    expect(controller.execute(associateUserMockedDTO)).rejects.toThrowError();
  });
});
