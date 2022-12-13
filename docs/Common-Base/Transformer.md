# Transformer

문서위치 : [README](../../README.md) >> [공통 베이스](../Common-Base.md)


### BaseTransformer

```tsx
export abstract class BaseTransformer {
  public abstract process(data);
}
```

- 베이스 클래스 입니다.

### BypassTransformer

```tsx
@Injectable()
export class BypassTransformer extends BaseTransformer {
  public process(data) {
    return data;
  }
}
```

- 반환 결과를 그대로 돌려주는 트랜스포머입니다.
