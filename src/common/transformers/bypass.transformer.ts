import { Injectable } from '@nestjs/common';
import { BaseTransformer } from './base.transformer';

@Injectable()
export class BypassTransformer extends BaseTransformer {
  public process(data) {
    return data;
  }
}
