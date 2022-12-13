# DTO

문서위치 : [README](../../README.md) >> [공통 베이스](../Common-Base.md)


/src/common/dto 하부에 위치합니다.

### BaseDto

```tsx
abstract class BaseDto implements CloneableInterface {
  public abstract clone(): BaseDto;
}
```

- 모든 DTO의 베이스 클래스입니다.
- 자기 복제가 가능하도록 CloneableInterface를 상속 받았습니다.

### ModelDto

```tsx
class ModelDto {
  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  id?: number;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  updatedAt?: Date;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  deletedAt?: Date;

  public constructor(
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
```

- BaseEntity에 대응하여 id, createdAt, updatedAt, deletedAt 이 기본 구성되어 있습니다.

### CloneableInterface

```tsx
export interface CloneableInterface {
  clone(): object;
}
```