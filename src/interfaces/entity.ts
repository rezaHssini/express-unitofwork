export abstract class IEntity<T = number | string> {
  id?: T;
  createdAt?: Date;
  updatedAt?: Date;
}
