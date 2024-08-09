import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne } from 'typeorm';
import { UserGrade } from '../enum';
import { UserProfile } from './user-profile.entity';
import { BaseEntity } from 'src/common/entity/base.entity';

@InputType('UserType', { isAbstract: true, description: '유저 테이블' })
@ObjectType()
@Entity({ schema: 'weone', name: 'user' })
export class User extends BaseEntity {
  @Field((type) => String, { description: '유저 이메일', nullable: true })
  @Column('varchar')
  email: string;

  @Field((type) => String, { description: '유저 비밀번호', nullable: true })
  @Column('varchar')
  password: string;

  @Field((type) => String, { description: '유저 이름', nullable: true })
  @Column('varchar')
  name: string;

  @Field((type) => Boolean, { description: '자동로그인 여부', nullable: true })
  @Column({ type: 'boolean', default: false })
  autoLogin: boolean;

  @Field((type) => UserGrade, { description: '유저 등급', nullable: true })
  @Column({ type: 'enum', enum: UserGrade, default: UserGrade.default })
  grade: UserGrade;

  // 관계테이블
  @Field((type) => UserProfile, { nullable: true })
  @OneToOne((type) => UserProfile, (profile) => profile.user)
  profile: UserProfile;
}
