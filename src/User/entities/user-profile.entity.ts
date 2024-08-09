import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from 'src/common/entity/base.entity';

@InputType('UserProfileType', {
  isAbstract: true,
  description: '유저 정보 테이블',
})
@ObjectType()
@Entity({ schema: 'weone', name: 'userProfile' })
export class UserProfile extends BaseEntity {
  @Field((type) => String, { nullable: true, description: '유저 닉네임' })
  @Column('varchar', { nullable: true })
  nickname: string;

  // 외래키 필드
  @Column()
  @Field((type) => Number, { description: '유저 번호' })
  userId: number;

  // 관계테이블
  @Field((type) => User)
  @OneToOne((type) => User, (user) => user.profile)
  @JoinColumn({ name: 'userId' })
  user: User;
}
