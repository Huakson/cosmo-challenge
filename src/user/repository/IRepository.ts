import { AssociateUser } from '../entities/associateUser.entitie';
import { User } from '../entities/user.entitie';
import { DeleteUserDTO } from '../useCases/deleteUser/delete-user-dto';
import { UpdateUserDTO } from '../useCases/updateUser/update-user.dto';

export interface IRepository {
  createUser(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  associateUser(data: AssociateUser): Promise<User>;
  deleteUser(data: DeleteUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByGroup(groupName: string): Promise<User[]>;
  updateUser(data: UpdateUserDTO): Promise<User>;
  findById(userId: string): Promise<User>;
}
