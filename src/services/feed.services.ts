import { FeedCategory, FeedItem } from 'types/api.type';
import { API_CONSTRAINTS } from '@/consts/apiConstraints.const';
import { axiosInst } from '@/libs/axios.lib';
import { isOk } from '@/guards/isOk.quard';

export async function getAllFeed(category: FeedCategory, count: number = 0): Promise<FeedItem[]> {
  const pagesByCount =
    count <= 0
      ? API_CONSTRAINTS.maxPageCount[category]
      : count >= API_CONSTRAINTS.articlesPerPage
      ? Math.ceil(count / API_CONSTRAINTS.articlesPerPage)
      : 1;

  const pageCount =
    pagesByCount <= API_CONSTRAINTS.maxPageCount[category] ? pagesByCount : API_CONSTRAINTS.maxPageCount[category];

  const feedList: FeedItem[] = [];

  for (let page = 1; page <= pageCount; page++) {
    const res = await axiosInst.get<FeedItem[]>(`${category}/${page}.json`);

    if (isOk(res) && Array.isArray(res.data)) {
      feedList.push(...res.data);
    }
  }

  if (count > 0) {
    return feedList.slice(0, count).sort((a, b) => b.time - a.time);
  }

  return feedList;
}
