import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class SyncExchange {
  user_id: any;
  save() {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 255 })
  exchange: string;

  @Column({ nullable: false, length: 255 })
  api_key: string;

  @ManyToOne(() => User, (user) => user.exchanges)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
