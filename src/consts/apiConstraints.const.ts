import { FeedCategory } from 'types/api.type';

interface Constraints {
  articlesPerPage: number;
  maxPageCount: {
    [key in FeedCategory]: number;
  };
  feedCategories: FeedCategory[];
}

export const API_CONSTRAINTS: Constraints = {
  articlesPerPage: 30,
  maxPageCount: {
    news: 10,
    newest: 12,
    ask: 2,
    show: 2,
    jobs: 1,
  },
  feedCategories: ['ask', 'jobs', 'newest', 'news', 'show'],
} as const;
