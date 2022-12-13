# Exception

문서위치 : [README](../../README.md) >> [공통 베이스](../Common-Base.md)


/src/common/exceptions에 위치합니다.

전역으로 사용할 exception은 이곳에 작성합니다. 아래는 ‘잘못된 인자 전달’에 대한 전역 exception입니다.

```tsx
class InvalidArgumentException extends Error {
  constructor(message?: string | undefined) {
    super(message ? message : '입력값이 형식에 맞지 않습니다.');
  }
}
```