import { FindAllSpecification as BaseSpecification } from '../find-all.specification';

export class ByAllSpecification extends BaseSpecification {
  protected initializeData(...args) {
    this.data = {
      order: {
        createdAt: 'DESC',
        name: 'ASC',
      },
    };
  }

  constructor() {
    super();
  }
}
