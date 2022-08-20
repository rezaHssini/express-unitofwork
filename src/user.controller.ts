import { User } from "entities/user.entity";
import { Inject } from "injection-js";
import { UNIT_OF_WORK } from "injection-tokens";
import { UnitOfWork } from "repositories/unit-of-work/unit-of-work";

export class UserController {
  constructor(@Inject(UNIT_OF_WORK) private unitOfWork: UnitOfWork) {}

  async list(id?: number): Promise<User[]> {
    return this.unitOfWork.userRepository.list(id);
  }
  async create(user: User): Promise<User> {
    return this.unitOfWork.userRepository.insert(user);
  }
  async update(user: User): Promise<User> {
    return this.unitOfWork.userRepository.update(user);
  }
  async delete(id: number): Promise<void> {
    return this.unitOfWork.userRepository.delete(id);
  }
}
