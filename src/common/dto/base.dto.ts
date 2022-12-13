import { CloneableInterface } from '../cloneable.interface';

export abstract class BaseDto implements CloneableInterface {
  public abstract clone(): BaseDto;
}
