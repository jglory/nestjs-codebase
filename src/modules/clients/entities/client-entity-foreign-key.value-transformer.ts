import { ForeignKeyValueTransformer } from '../../../common/entities/value-transformers/foreign-key.value-transformer';
import { ClientEntity } from './client.entity';

export class ClientEntityForeignKeyValueTransformer extends ForeignKeyValueTransformer<ClientEntity> {
  protected createEntity(): ClientEntity {
    return new ClientEntity();
  }
}
