# Entity

문서위치 : [README](../../README.md) >> [코드 개발](../Code-Developing.md)


```tsx
@Entity('sample')
export class SampleEntity extends BaseEntity {
  @Column()
  public type: TypeEnum;

  @Column()
  public name: string;

  @ManyToMany((type) => ItemEntity)
  @JoinTable()
  public items: ItemEntity[];

  @Column(() => FormatValue)
  public format: FormatValue;

  protected initializeWithDto(dto: SampleDto) {
    super.initializeWithDto(dto);
    this.type = dto.type;
    this.name = dto.name;
    this.items = dto.items.map(
      (item) => item.toDto(),
    );
		if (dto.format) {
			this.format = new FormatValue(dto.format.content);
		}
  }

  public toDto(): SampleDto {
    return new SampleDto(
			this.id,
      this.createdAt,
      this.updatedAt,
      this.deletedAt,
	    this.typ,
      this.name,
			this.items ? this.items.map((item) => item.toDto()) : undefined,
	    this.format,
		}
  }
}
```

- initializeWithDto를 구현합니다. entity와 연관된 dto를 인자로 받아 자신을 초기화하는 코드를 구현합니다.
- toDto를 구현합니다. 자신을 연관된 dto로 변환하여 돌려주는 코드를 구현합니다.
