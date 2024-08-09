import { API_CONSTRAINTS } from '@/consts/apiConstraints.const';
import { axiosInst } from '@/libs/axios.lib';
import { FeedCategory, FeedItem } from '@/types/api.type';

export async function getAllFeed(category: FeedCategory, count: number = 0): Promise<FeedItem[]> {
  let pagesByCount: number;

  if (count <= 0) {
    pagesByCount = API_CONSTRAINTS.maxPageCount[category];
  } else if (count >= API_CONSTRAINTS.articlesPerPage) {
    pagesByCount = Math.ceil(count / API_CONSTRAINTS.articlesPerPage);
  } else {
    pagesByCount = 1;
  }

  const pageCount = Math.min(pagesByCount, API_CONSTRAINTS.maxPageCount[category]);

  const feedList: FeedItem[] = [];

  for (let page = 1; page <= pageCount; page++) {
    const res = await axiosInst.get<FeedItem[]>(`${category}/${page}.json`);

    if (Array.isArray(res.data)) {
      feedList.push(...res.data);
    }
  }

  if (count > 0) {
    return feedList.slice(0, count).sort((a, b) => b.time - a.time);
  }

  return feedList;
}
