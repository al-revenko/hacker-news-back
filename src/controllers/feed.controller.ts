import { Get, JsonController, QueryParam, Req, NotFoundError } from 'routing-controllers';
import { getAllFeed } from '@/services/feed.services';
import { Request } from 'express';
import { isFeedCategory } from '@/guards/isFeedCategory.quard';

@JsonController('/feed')
export class FeedController {
  @Get('/news')
  @Get('/newest')
  @Get('/ask')
  @Get('/show')
  @Get('/jobs')
  async getFeed(@Req() req: Request, @QueryParam('count', { type: Number }) count: number) {
    const category = req.path.split('/')[2];

    if (isFeedCategory(category)) {
      return getAllFeed(category, count);
    }

    throw new NotFoundError(`${category} - is not valid path`);
  }
}
