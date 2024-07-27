import 'dotenv/config';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { FeedController } from '@/controllers/feed.controller';
import { ItemController } from '@/controllers/item.controller';

const app = createExpressServer({
  controllers: [FeedController, ItemController],
  cors: true,
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => console.log(`server started on http://${HOST}:${PORT}`));
