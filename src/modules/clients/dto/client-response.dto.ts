import { IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ModelDto as BaseDto } from '../../../common/dto/model.dto';
export class ClientResponseDto extends BaseDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Length(2, 20)
  public name?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @Length(5, 2048)
  public homepage?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  public memo?: string;

  public constructor(
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date,
    name?: string,
    homepage?: string,
    memo?: string,
  ) {
    super(id, createdAt, updatedAt, deletedAt);

    this.name = name;
    this.homepage = homepage;
    this.memo = memo;
  }

  public clone(): ClientResponseDto {
    return new ClientResponseDto(
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
