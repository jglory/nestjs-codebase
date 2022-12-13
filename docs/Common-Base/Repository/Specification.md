# Specification

[README](../../../README.md) >> [공통 베이스](../../Common-Base.md) >> [Repository](../Repository.md)


/src/common/repositories에 위치합니다.

repository 클래스에 인자로 주어질 명세 베이스 클래스입니다.

```tsx
abstract class Specification {
  private _data: object = {};

  protected abstract initializeData(...args);

  get data() {
    return this._data;
  }

  protected set data(data: object) {
    this._data = data;
  }

  protected constructor(...args) {
    this.initializeData(...args);
  }
}
```

파생 클래스에서 initializeData 를 정의해야 합니다.

```tsx
class ByIdSpecification extends Specification {
  protected initializeData(...args) {
    this.data = {
      id: +args[0],
    };
  }

  constructor(id: number) {
    super(id);
  }
}
```

repository - specification 패턴에 대한 것은 다음 링크를 참고하세요.

[Specification Pattern | DevIQ](https://deviq.com/design-patterns/specification-pattern)