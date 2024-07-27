import { Get, JsonController, NotFoundError, Param } from 'routing-controllers';
import { getItem } from '@/services/item.services';

@JsonController('/item')
export class ItemController {
  @Get('/:id')
  async getItemData(@Param('id') id: number) {
    const result = await getItem(id);

    if (result) {
      return result;
    }

    throw new NotFoundError(`item ${id} - not found`);
  }
}
