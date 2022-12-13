# CQRS

문서위치 : [README](../../README.md) >> [코드 개발](../Code-Developing.md)


### create command

```tsx
class CreateSampleCommand implements ICommand {
  constructor(readonly dto: CreateSampleDto) {}
}
```

### create handler

```tsx
@CommandHandler(CreateSampleCommand)
class CreateSampleHandler implements ICommandHandler {
  constructor(
    @InjectRepository(SampleEntity)
    private repository: Repository<SampleEntity>,
  ) {}

  async execute(command: CreateSampleCommand) {
    return (await this.repository.save(new SampleEntity(command.dto)));
  }
}
```

### find-all query

```tsx
class FindAllQuery implements IQuery {}
```

### find-all handler

```tsx
@QueryHandler(FindAllQuery)
class FindAllSamplesHandler implements IQueryHandler {
  constructor(
    @InjectRepository(SampleEntity)
    private repository: Repository<SampleEntity>,
  ) {}

  async execute(query: FindAllSamplesQuery) {
    return (await this.repository.find(new ByAllSpecification().data)).map(
      (item) => item.toDto(),
    );
  }
}
```
