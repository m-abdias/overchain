import { SyncExchange } from 'src/sync_exchanges/entities/sync_exchange.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  save() {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 255 })
  username: string;

  @Column({ nullable: false, length: 255 })
  password: string;

  @Column({ nullable: false, length: 255 })
  name: string;

  @Column({ nullable: false, length: 255 })
  email: string;

  @Column({ length: 255 })
  phonenumber: string;

  @OneToMany(() => SyncExchange, (exchanges) => exchanges.user)
  exchanges: SyncExchange[];
}
