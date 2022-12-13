# Controller

문서위치 : [README](../../README.md) >> [코드 개발](../Code-Developing.md)


```tsx
@Controller('samples')
@ApiTags('samples')
export class SamplesController {
  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @ApiCreatedResponse({ description: '샘플을 생성한다.', type: SampleDto })
  public async create(@Body() dto: CreateSampleDto) {
    return new BypassTransformer().process(this.commandBus.execute(new CreateSampleCommand(dto)));
  }

  @Get()
  @ApiCreatedResponse({
    description: '샘플 목록을 돌려준다.',
    type: SampleDto,
    isArray: true,
  })
  public findAll() {
    return new BypassTransformer().process(this.queryBus.execute(new FindAllQuery()));
  }
}
```

- cqrs 씁니다.
- handler 에서 반환될 결과를 상황에 맞는 transformer를 통해 변환을 하여 요청 클라이언트에게 돌려줍니다. 예제에서는 결과를 그대로 돌려주는 BypassTransformer를 사용하였습니다.
