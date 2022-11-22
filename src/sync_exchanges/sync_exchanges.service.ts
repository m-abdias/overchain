import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateSyncExchangeDto } from './dto/create-sync_exchange.dto';
import { UpdateSyncExchangeDto } from './dto/update-sync_exchange.dto';
import { SyncExchange } from './entities/sync_exchange.entity';

@Injectable()
export class SyncExchangesService {
  constructor(
    @InjectRepository(SyncExchange)
    private repo: Repository<SyncExchange>,
    @InjectRepository(User)
    private repoUser: Repository<User>,
  ) {}

  async create(createSyncExchangeDto: CreateSyncExchangeDto) {
    const user = await this.repoUser.findOne({
      where: {
        id: createSyncExchangeDto.user_id,
      },
    });

    if (user) {
      const newExchange = this.repo.create({
        exchange: createSyncExchangeDto.exchange,
        api_key: createSyncExchangeDto.api_key,
        user: user,
      });
      await this.repo.insert(newExchange);
      return newExchange;
    }
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, updateSyncExchangeDto: UpdateSyncExchangeDto) {
    const exchangeId = await this.repo.findOneBy({ id });
    const user = await this.repoUser.findOne({
      where: {
        id: updateSyncExchangeDto.user_id,
      },
    });
    if (user) {
      const { exchange, api_key } = updateSyncExchangeDto;
      exchangeId.exchange = exchange ? exchange : exchangeId.exchange;
      exchangeId.api_key = api_key ? api_key : exchangeId.api_key;
      exchangeId.user_id = user ? user : exchangeId.user_id;
      return this.repo.save(exchangeId);
    }
  }

  async remove(id: number) {
    await this.repo.delete({ id });
  }
}
