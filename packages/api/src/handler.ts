import { NotFoundError, OrchidOrmError, OrchidOrmInternalError } from '@acme/be-model';
import { Exception, get } from '@xstools/utility';
import type { ErrorHandler } from 'hono';
import { HTTPException } from 'hono/http-exception';
import type { StatusCode } from 'hono/utils/http-status';
import { ZodError } from 'zod';

export const handler: ErrorHandler = async (e, c) => {
  if (e instanceof HTTPException) {
    if (e.status === 404) {
      return c.text('404 Not Found', 404);
    }
    return c.json(
      {
        errors: [
          {
            code: e.status,
            message: e.message,
            status: e.status,
            title: e.message,
          },
        ],
      },
      e.status,
    );
  } else if (e instanceof Exception.BaseException) {
    return c.json(
      {
        errors: [
          {
            code: e.code,
            message: e.message,
            status: e.status,
            title: e.message,
          },
        ],
      },
      e.status as StatusCode,
    );
  } else if (e instanceof OrchidOrmError) {
    if (e instanceof NotFoundError) {
      return c.json(
        {
          errors: [
            {
              code: 404,
              message: '资源不存在',
              status: 404,
              title: '资源不存在',
            },
          ],
        },
        404,
      );
    }
  } else if (e instanceof OrchidOrmInternalError) {
    return c.json(
      {
        errors: [
          {
            code: 500,
            message: '数据库查询错误',
            status: 500,
            title: '数据库查询错误',
          },
        ],
      },
      500,
    );
  } else if (e instanceof TypeError) {
    console.error(e.message);

    return c.json(
      {
        errors: [
          {
            code: 500,
            message: '类型错误',
            status: 500,
            title: '类型错误',
          },
        ],
      },
      500,
    );
  } else if (e instanceof ZodError) {
    const issue = e.issues[0];
    let message = issue.message;

    if (issue.code === 'invalid_union') {
      message = get(e.errors, '0.unionErrors.0.issues.0.message', '表单填写错误，请联系管理员');
    }

    return c.json(
      {
        errors: [
          {
            code: 400,
            message: message,
            status: 400,
            title: '数据验证错误',
          },
        ],
      },
      400,
    );
  }

  console.error(e);

  return c.text('Internal Server Error', 500);
};
