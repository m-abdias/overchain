import { Test, TestingModule } from '@nestjs/testing';
import { SyncExchangesService } from './sync_exchanges.service';

describe('SyncExchangesService', () => {
  let service: SyncExchangesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyncExchangesService],
    }).compile();

    service = module.get<SyncExchangesService>(SyncExchangesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
