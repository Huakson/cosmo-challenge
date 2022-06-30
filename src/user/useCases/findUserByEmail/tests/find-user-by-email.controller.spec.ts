/* eslint-disable import/no-extraneous-dependencies */
import { Test } from '@nestjs/testing';

import { User } from '../../../entities/user.entitie';
import { FindUserByEmailController } from '../find-user-by-email.controller';
import { FindUserByEmailDTO } from '../find-user-by-email.dto';
import { FindUserByEmailService } from '../find-user-by-email.service';

const userMockedValues: User = {
  email: 'test@test.com',
  firstName: 'test',
  id: '8e65-433d-875e-c1db34b59258-4c3fc7df',
  lastName: 'test',
  accountId: '',
  groupId: '4c3fc7df-8e65-433d-875e-c1db34b59258',
};

const findUserByEmailMockedDTO: FindUserByEmailDTO = {
  userEmail: 'test@test.com',
};

describe('Find user by email', () => {
  let controller: FindUserByEmailController;
  let service: FindUserByEmailService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [FindUserByEmailController],
      providers: [
        {
          provide: FindUserByEmailService,
          useValue: {
            execute: jest.fn().mockResolvedValue(userMockedValues),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<FindUserByEmailController>(
      FindUserByEmailController,
    );
    service = moduleRef.get<FindUserByEmailService>(FindUserByEmailService);
  });

  it('shoud be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should respond with the user by the service', async () => {
    const result = await controller.execute(findUserByEmailMockedDTO);
    expect(result.email).toEqual(findUserByEmailMockedDTO.userEmail);
  });
});
