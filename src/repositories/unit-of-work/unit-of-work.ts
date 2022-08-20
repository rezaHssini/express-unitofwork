import { UserRepository } from "repositories/repositories/user.repository";

export class UnitOfWork {
  constructor(dbConnection: any) {
    this.userRepository = new UserRepository(dbConnection);
  }
  userRepository: UserRepository;
  //add other repositories here
}
