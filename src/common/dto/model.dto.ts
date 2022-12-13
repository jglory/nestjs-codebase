import { IsDate, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from './base.dto';

export abstract class ModelDto extends BaseDto {
  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  public id?: number;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  public createdAt?: Date;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  public updatedAt?: Date;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  public deletedAt?: Date;

  protected constructor(
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date,
  ) {
    super();

    this.id = id;
    this.createdAt = createdAt ? new Date(createdAt) : undefined;
    this.updatedAt = updatedAt ? new Date(updatedAt) : undefined;
    this.deletedAt = deletedAt ? new Date(deletedAt) : undefined;
  }
}
