import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryColumn({
    type: 'text',
    generated: 'uuid',
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
