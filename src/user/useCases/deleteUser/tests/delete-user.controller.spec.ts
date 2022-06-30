/* eslint-disable import/no-extraneous-dependencies */
import { HttpException } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { User } from '../../../entities/user.entitie';
import { DeleteUserDTO } from '../delete-user-dto';
import { DeleteUserController } from '../delete-user.controller';
import { DeleteUserService } from '../delete-user.service';

const userMockedValues: User = {
  email: 'test@test.com',
  firstName: 'test',
  id: '8e65-433d-875e-c1db34b59258-4c3fc7df',
  lastName: 'test',
  accountId: '',
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const deleteUserMockedDTO: DeleteUserDTO = {
  userId: '8e65-433d-875e-c1db34b59258-4c3fc7df',
};

describe('Delete user', () => {
  let controller: DeleteUserController;
  let service: DeleteUserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [DeleteUserController],
      providers: [
        {
          provide: DeleteUserService,
          useValue: {
            execute: jest.fn().mockResolvedValue(userMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<DeleteUserController>(DeleteUserController);
    service = moduleRef.get<DeleteUserService>(DeleteUserService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond with the user deleted by the service', async () => {
    const result = await controller.execute(deleteUserMockedDTO);
    expect(result).toEqual(userMockedValues);
  });

  it('should throw an User doesnt exists exception', async () => {
    jest
      .spyOn(service, 'execute')
      .mockRejectedValueOnce(new HttpException('User doesnt exists', 400));

    expect(controller.execute(deleteUserMockedDTO)).rejects.toThrowError();
  });
});
