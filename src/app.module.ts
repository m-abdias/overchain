import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { SyncExchangesModule } from './sync_exchanges/sync_exchanges.module';
import { SyncExchange } from './sync_exchanges/entities/sync_exchange.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 4306,
      username: 'root',
      password: 'OverChain2022!',
      database: 'overchain_crypto',
      synchronize: true,
      logging: true,
      entities: [User, SyncExchange],
    }),
    UsersModule,
    SyncExchangesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
