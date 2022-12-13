import { ValueTransformer } from 'typeorm';

export class JsonValueTransformer implements ValueTransformer {
  to(value): string {
    return JSON.stringify(value);
  }

  from(value: string) {
    return JSON.parse(value);
  }
}
