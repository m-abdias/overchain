import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SyncExchangesService } from './sync_exchanges.service';
import { CreateSyncExchangeDto } from './dto/create-sync_exchange.dto';
import { UpdateSyncExchangeDto } from './dto/update-sync_exchange.dto';

@Controller('sync-exchanges')
export class SyncExchangesController {
  constructor(private readonly syncExchangesService: SyncExchangesService) {}

  @Post()
  create(@Body() createSyncExchangeDto: CreateSyncExchangeDto) {
    return this.syncExchangesService.create(createSyncExchangeDto);
  }

  @Get()
  findAll() {
    return this.syncExchangesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.syncExchangesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSyncExchangeDto: UpdateSyncExchangeDto,
  ) {
    return this.syncExchangesService.update(+id, updateSyncExchangeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.syncExchangesService.remove(+id);
  }
}
