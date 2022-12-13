export abstract class Specification {
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
