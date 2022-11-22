import { PartialType } from '@nestjs/mapped-types';
import { CreateSyncExchangeDto } from './create-sync_exchange.dto';

export class UpdateSyncExchangeDto extends PartialType(CreateSyncExchangeDto) {
  exchange: string;
  api_key: string;
  user_id: number;
}
