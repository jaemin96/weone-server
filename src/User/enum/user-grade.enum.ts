import { registerEnumType } from '@nestjs/graphql';

export enum UserGrade {
  'admin' = '관리자',
  'default' = '일반유저',
}
registerEnumType(UserGrade, { name: 'UserGrade' });
