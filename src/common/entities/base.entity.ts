import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsDate, IsInt } from 'class-validator';
import { ModelDto } from '../dto/model.dto';

// TODO: 프라퍼티 모두 readonly 로 변경
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @IsInt()
  public id?: number;

  @CreateDateColumn()
  @IsDate()
  public createdAt?: Date;

  @UpdateDateColumn()
  @IsDate()
  public updatedAt?: Date;

  @DeleteDateColumn()
  @IsDate()
  public deletedAt?: Date;

  protected initializeWithDto(dto: ModelDto) {
    this.id = dto.id;
    this.createdAt = dto.createdAt;
    this.updatedAt = dto.updatedAt;
    this.deletedAt = dto.deletedAt;
  }

  public abstract toDto(): ModelDto;

  protected constructor(dto?: ModelDto) {
    if (!dto) {
      return;
    }
    this.initializeWithDto(dto);
  }
}
