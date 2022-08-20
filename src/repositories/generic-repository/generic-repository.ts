import { SetDefaults } from "decorators/ser-defaults.decorator";
import { setUpdateTime } from "decorators/set-update-time.decorator";
import { IEntity } from "interfaces/entity";
import { IRepository } from "interfaces/repository";

export abstract class GenericRepository<T extends IEntity<k>, k>
  implements IRepository<T, k>
{
  private databaseConnection: any;

  constructor(dbConnection: any) {
    this.databaseConnection = dbConnection;
  }
  
  @SetDefaults()
  async insert(input: T): Promise<T> {
    return this.databaseConnection.query(
      "INSERT INTO users(username, password,name, age) VALUES(${user.username}, ${user.password}, ${user.name}, ${user.age})",
      {
        user: { ...input },
      }
    );
  }
  @setUpdateTime()
  async update(input: T): Promise<T> {
    return this.databaseConnection.query(
      "UPDATE users SET (username, password,name, age) VALUES(${user.username}, ${user.password}, ${user.name}, ${user.age}) WHERE id=:id",
      {
        user: { ...input },
        id: input.id,
      }
    );
  }
  async list(filter?: k): Promise<T[]> {
    if (filter) {
      return this.databaseConnection.query("SELECT * from users WHERE id=:id", {
        id: filter,
      });
    } else {
      return this.databaseConnection.query("SELECT * from users");
    }
  }
  async delete(filter: k): Promise<void> {
    return this.databaseConnection.query("DELETE from users WHERE id=:id", {
      id: filter,
    });
  }
}
