# Entity

문서위치 : [README](../../README.md) >> [공통 베이스](../Common-Base.md)


/src/common/entities에 위치합니다.

```tsx
abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @IsInt()
  public id: number;

  @CreateDateColumn({ type: 'timestamp' })
  @IsDate()
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @IsDate()
  public updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  @IsDate()
  public deletedAt: Date;

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
```

- id, createdAt, updatedAt, deletedAt 의 기본 컬럼을 가지도록 되어 있습니다.
- deletedAt은 논리적 삭제를 지원하기 위해 추가된 컬럼입니다.
- toDto 메소드를 통해 자기 객체를 dto 객체로 변환하는 기능이 있습니다.