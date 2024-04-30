import { BaseException } from './base';

class Unauthorized extends BaseException {
  public constructor(messages: string, code = 'UnauthorizedException') {
    super(401, messages, code);
  }
}

export class Exception {
  public static BaseException = BaseException;
  public static Unauthorized = Unauthorized;
}
