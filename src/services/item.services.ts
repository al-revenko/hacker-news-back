import { axiosInst } from '@/libs/axios.lib';
import { Item } from '@/types/api.type';

export async function getItem(id: number | string): Promise<Item | null> {
  const res = await axiosInst.get<Item>(`item/${id}.json`);

  if (typeof res.data === 'object') {
    return res.data;
  }

  return null;
}
