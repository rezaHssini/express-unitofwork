export function Entity(): ClassDecorator {
  return Reflect.metadata("isEntity", "true");
}
