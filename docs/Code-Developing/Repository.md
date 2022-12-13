# Repository

문서위치 : [README](../../README.md) >> [코드 개발](../Code-Developing.md)


Repository 패턴에 [Specification](../Common-Base/Repository/Specification.md)(명세) 패턴을 연계해 사용합니다.

### find-one-sample base specification

```tsx
abstract class FindOneSampleSpecification extends Specification {}
```

### find-one-sample-by-id specification

```tsx
class ByIdSpecification extends FindOneSampleSpecification {
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

- find-one-sample base specification 있고 실제 명세가 이를 상속하는 이유는  repository의 find-one 메소드의 입력 인자가 추상 객체를 의존하도록 하여 인자값에 대한 입력의 제한을 부여하기 위함입니다. 위의 예제는 특정 id 값에 대해 1개의 sample을 찾아주는 명세를 정의하였습니다. 이외 추가적인 find-one 관련 명세는 모두 find-one-sample base specification 을 상속받아야 합니다.
