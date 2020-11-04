import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'uuid',
  })
  id: string;

  @Column('text', {
    nullable: true,
  })
  first_name: string;

  @Column('text', {
    nullable: true,
  })
  last_name: string;

  @Column('text', {
    nullable: true,
  })
  email: string;

  @Column('smallint', {
    nullable: true,
  })
  age: number;
};
