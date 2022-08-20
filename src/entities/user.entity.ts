import { Entity } from "decorators/entity.decorator";
import { IEntity } from "../interfaces/entity";

@Entity()
export class User extends IEntity<number> {
  username: string;
  password: string;
  name: string;
  age: number;
}
