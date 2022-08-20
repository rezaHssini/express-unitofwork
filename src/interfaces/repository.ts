export interface IRepository<T, k> {
  insert: (input: T) => Promise<T>;
  update: (input: T) => Promise<T>;
  list: (filter?: k) => Promise<T[]>;
  delete: (filter: k) => Promise<void>;
}
