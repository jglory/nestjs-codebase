import { Column, Entity } from 'typeorm';
import { ClientDto } from '../dto/client.dto';
import { BaseEntity } from '../../../common/entities/base.entity';
import { ModelDto } from '../../../common/dto/model.dto';

@Entity('client')
export class ClientEntity extends BaseEntity {
  @Column({ length: 20 })
  public name: string;

  @Column({ length: 2048, nullable: true })
  public homepage: string;

  @Column({ type: 'text', nullable: true })
  public memo: string;

  protected initializeWithDto(dto: ClientDto) {
    super.initializeWithDto(dto);
    this.name = dto.name;
    this.homepage = dto.homepage;
    this.memo = dto.memo;
  }

  public constructor(dto?: ModelDto) {
    super(dto);
  }

  public toDto(): ClientDto {
    return new ClientDto(
      this.id,
      this.createdAt,
      this.updatedAt,
      this.deletedAt,
      this.name,
      this.homepage,
      this.memo,
    );
  }
}
