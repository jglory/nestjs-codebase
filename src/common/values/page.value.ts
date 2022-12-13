import { Min, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PageValue {
  @ApiProperty({ required: false })
  @IsNumber()
  @Min(1)
  public readonly number: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Min(1)
  public readonly size: number;

  @ApiProperty({ required: false })
  @IsNumber()
  public readonly offset: number;

  public constructor(number: number, size: number) {
    this.number = number;
    this.size = size;
    this.offset = (this.number - 1) * this.size;
  }
}
