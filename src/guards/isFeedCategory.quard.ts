import { API_CONSTRAINTS } from '@/consts/apiConstraints.const';
import { FeedCategory } from '@/types/api.type';

export function isFeedCategory(value: string): value is FeedCategory {
  if (API_CONSTRAINTS.feedCategories.includes(value as FeedCategory)) {
    return true;
  }
  return false;
}
