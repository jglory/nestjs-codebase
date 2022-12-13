import { IsNumber, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PageValue } from './page.value';

export class PaginationValue {
  @ApiProperty({ required: false })
  @IsObject()
  public readonly page: PageValue;

  @ApiProperty({ required: false })
  @IsNumber()
  public readonly count: number;

  @ApiProperty({ required: false })
  @IsNumber()
  public readonly pageCount: number;

  public constructor(page: PageValue, count: number) {
    this.page = page;
    this.count = count;

    const quotient = this.count % this.page.size;
    this.pageCount =
      (this.count - quotient) / this.page.size + (quotient > 0 ? 1 : 0);
  }
}
