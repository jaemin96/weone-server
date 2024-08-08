import { Field, ObjectType } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@ObjectType()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => Number, { nullable: true })
  id?: number;

  @CreateDateColumn()
  @Field((type) => Date, { nullable: true })
  createdAt?: Date;

  @UpdateDateColumn()
  @Field((type) => Date, { nullable: true })
  updatedAt?: Date;

  @DeleteDateColumn()
  @Field((type) => Date, { nullable: true })
  deletedAt?: Date;
}
