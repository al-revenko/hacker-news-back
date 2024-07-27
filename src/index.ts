import 'dotenv/config';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { FeedController } from './controllers/feed.controller';

const app = createExpressServer({
  controllers: [FeedController],
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => console.log(`server started on http://${HOST}:${PORT}`));
