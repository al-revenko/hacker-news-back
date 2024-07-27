import { AxiosResponse } from 'axios';

export function isOk<R extends AxiosResponse>(res: R): boolean {
  if (res.status >= 200 && res.status <= 299) {
    return true;
  }

  return false;
}
