import { Module } from '@nestjs/common';
import { SyncExchangesService } from './sync_exchanges.service';
import { SyncExchangesController } from './sync_exchanges.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SyncExchange } from './entities/sync_exchange.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SyncExchange, User])],
  controllers: [SyncExchangesController],
  providers: [SyncExchangesService],
})
export class SyncExchangesModule {}
