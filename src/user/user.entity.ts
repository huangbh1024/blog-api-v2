import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  account: string;

  @Column({ default: '123456' })
  password: string;
}
