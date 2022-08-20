import { AsyncMethodDecorator } from "interfaces/async-method-decorator";
import { IEntity } from "interfaces/entity";

export function SetDefaults(): AsyncMethodDecorator {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    let originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]): Promise<any> {
      const arg = args[0] as IEntity;
      arg.createdAt = new Date();

      return originalMethod.apply(this, args);
    };
  };
}
