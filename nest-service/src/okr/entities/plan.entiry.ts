import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlanEntiry {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid

  @Column({ length: 256, unique: true })
  title: string; //256长度的字符串

  @Column('text')
  content: string; //描述，长文本

  // @Column({
  //   type: 'enum',
  //   enum: planStatus,
  //   default: planStatus.WORKING,
  // })
  // status: planStatus; //int类型，代表状态，0-放弃，1-进行中，2-完成
  @Column({ type: 'int', default: 1 })
  status: number; //int类型，代表状态，0-放弃，1-进行中，2-完成

  // @Column({
  //   type: 'enum',
  //   enum: planType,
  //   default: planType.IT,
  // })
  // type: planType; //int类型，枚举值【计划类型】
  @Column({ type: 'int', default: 1 })
  type: number; // int类型，枚举值【计划类型】
}
