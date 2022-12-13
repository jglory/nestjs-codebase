import { CloneableInterface } from '../cloneable.interface';

export abstract class BaseValue implements CloneableInterface {
  abstract clone(): object;
}
