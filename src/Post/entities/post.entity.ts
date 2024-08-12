import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from 'src/User/entities';
import { BaseEntity } from 'src/common/entity/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@InputType('PostType', { isAbstract: true, description: '포스트 테이블' })
@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field((type) => String, { description: '포스트 제목', nullable: true })
  @Column('varchar')
  title: string;

  @Field((type) => String, { description: '포스트 부제목', nullable: true })
  @Column('varchar')
  subTitle: string;

  @Field((type) => String, { description: '포스트 설명', nullable: true })
  @Column('varchar')
  description: string;

  @Field((type) => Boolean, { description: '포스트 좋아요', nullable: true })
  @Column('varchar')
  like: boolean;

  @Field((type) => Boolean, { description: '포스트 싫어요', nullable: true })
  @Column('varchar')
  unlike: boolean;

  @Field((type) => Boolean, { description: '포스트 공개여부', nullable: true })
  @Column('varchar')
  isOpen: boolean;

  // 외래키 필드
  @Column()
  @Field((type) => Number, { description: '유저 번호' })
  userId: number;

  // 관계테이블
  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.posts)
  @JoinColumn({ name: 'userId' })
  user: User;
}
