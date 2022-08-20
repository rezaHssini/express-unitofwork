import { User } from "entities/user.entity";
import { GenericRepository } from "repositories/generic-repository/generic-repository";

export class UserRepository extends GenericRepository<User, number> {
  constructor(dbConnection: any) {
    super(dbConnection);
  }

  //add custom functions here
  //this.databaseConnection is accessable here
}
