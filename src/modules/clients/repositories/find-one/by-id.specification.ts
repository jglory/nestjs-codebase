import { FindOneSpecification } from '../find-one.specification';

export class ByIdSpecification extends FindOneSpecification {
  protected initializeData(id: number) {
    this.data = {
      where: {
        id: id,
      },
    };
  }

  constructor(id: number) {
    super(id);
  }
}
