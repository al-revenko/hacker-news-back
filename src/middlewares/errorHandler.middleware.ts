import { isAxiosError } from 'axios';
import { Request, Response } from 'express';
import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';

@Middleware({ type: 'after' })
export class ErrorHandler implements ExpressErrorMiddlewareInterface {
  error<T extends Error>(err: T, req: Request, res: Response) {
    const send = (code: number, message: string) => {
      res.status(code);

      res.json({
        code,
        message,
      });
    };

    if (isAxiosError(err)) {
      console.log(err.code, err.name, err.message);

      const code = Number(err.code);

      send(isNaN(code) ? 520 : code, err.message);
    } else if (err instanceof HttpError) {
      console.log(err.httpCode, err.name, err.message);

      send(err.httpCode, err.message);
    } else {
      console.log('Unexpected error');
      console.log(err.stack);

      send(500, 'Internal server error');
    }
  }
}
