import { ValueTransformer } from 'typeorm';
import { BaseEntity } from '../base.entity';

export abstract class ForeignKeyValueTransformer<T extends BaseEntity>
  implements ValueTransformer
{
  to(value): number {
    if (typeof value == 'number') {
      return value;
    }
    return value.id;
  }

  from(value): T {
    const entity = this.createEntity();
    entity.id = value;
    return entity;
  }

  protected abstract createEntity(): T;
}
