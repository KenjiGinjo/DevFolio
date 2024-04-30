export class BaseException extends Error {
  public status: number;
  public code: string;

  public constructor(status: number, message: string, code: string) {
    super(message);

    this.status = status;
    const normalizedCode = this.title(code.replace(/Exception$/, ''));
    this.code = this.snake(`E ${normalizedCode}`).toUpperCase();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseException);
    }
  }

  private title(str: string): string {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }

  private snake(str: string): string {
    return str
      .replace(/\W+/g, '_')
      .replace(/^_+|_+$/g, '')
      .toLowerCase();
  }
}
