# DTO

문서위치 : [README](../../README.md) >> [코드 개발](../Code-Developing.md)

### ModelDto

```tsx
class SampleDto extends ModelDto {
  @ApiProperty({ required: false )
  @IsString()
  @IsOptional()
  name?: string;
}
```

- ModelDto를 상속 받습니다.
- validation 설정을 합니다.
- swagger 설정을 합니다.
- 필요에 따라 파생되는 DTO는 ModelDto를 상속 받습니다.

### ResultDto

```tsx
class ResultDto extends ModelDto {
  @ApiProperty({ required: true })
  public id: number;

  @ApiProperty({ required: true })
  public createdAt: Date;

  @ApiProperty({ required: true })
  public updatedAt: Date;

  @ApiProperty({ required: true })
  public deletedAt?: Date;

  @ApiProperty({ required: true })
  public name?: string;
}
```

- 클라이언트 응답에 사용되는 dto입니다.