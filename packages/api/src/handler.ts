import { Exception } from '@devfolio/tool';
import type { ErrorHandler } from 'hono';
import { HTTPException } from 'hono/http-exception';
import type { StatusCode } from 'hono/utils/http-status';
import { ZodError } from 'zod';
import { fromError } from 'zod-validation-error';

export const handler: ErrorHandler = async (e, c) => {
  if (e instanceof HTTPException) {
    if (e.status === 404) {
      return c.text('404 Not Found', 404);
    }

    return c.json(
      {
        code: e.status,
        message: e.message,
      },
      e.status,
    );
  } else if (e instanceof Exception.BaseException) {
    return c.json(
      {
        code: e.code,
        message: e.message,
      },
      e.status as StatusCode,
    );
  } else if (e instanceof TypeError) {
    console.error(e.message);

    return c.json(
      {
        code: 500,
        message: '类型错误',
      },
      500,
    );
  } else if (e instanceof ZodError) {
    const validationError = fromError(e);
    return c.json(
      {
        code: 400,
        message: validationError.toString()
      },
      400,
    );
  }

  console.error(e);
  return c.text('Internal Server Error', 500);
};
