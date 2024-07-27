import { axiosInst } from '@/libs/axios.lib';
import { isOk } from '@/guards/isOk.quard';
import { Item } from '@/types/api.type';

export async function getItem(id: number | string): Promise<Item | null> {
  const res = await axiosInst.get<Item>(`item/${id}.json`);

  if (isOk(res)) {
    return res.data;
  }

  return null;
}
