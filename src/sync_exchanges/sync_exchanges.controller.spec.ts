import { Test, TestingModule } from '@nestjs/testing';
import { SyncExchangesController } from './sync_exchanges.controller';
import { SyncExchangesService } from './sync_exchanges.service';

describe('SyncExchangesController', () => {
  let controller: SyncExchangesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SyncExchangesController],
      providers: [SyncExchangesService],
    }).compile();

    controller = module.get<SyncExchangesController>(SyncExchangesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
