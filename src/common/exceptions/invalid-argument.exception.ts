export class InvalidArgumentException extends Error {
  constructor(message?: string | undefined) {
    super(message ? message : '입력값이 형식에 맞지 않습니다.');
  }
}
