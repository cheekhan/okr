import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TomatoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid

  @Column({ length: 256, unique: true })
  title: string; //256长度的字符串

  @Column('text')
  content: string; //描述，长文本

  @Column()
  okrId: string; //所属okr的uuid

  // @Column({
  //   type: 'enum',
  //   enum: tomatoStatus,
  //   default: tomatoStatus.WORKING,
  // })
  // status: tomatoStatus; //int类型，代表状态，0-放弃，1-进行中，2-完成
  @Column({ type: 'int', default: 1 })
  status: number; // int类型，代表状态，0-放弃，1-进行中，2-完成

  @Column('datetime')
  startDate: string; // 开始时间戳

  @Column('datetime')
  endDate: string; // 结束时间戳
}

@Entity()
export class LogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid

  @Column()
  tomatoId: string; //中断的那个番茄钟的id

  @Column('text')
  content: string; //描述，长文本

  @Column('datetime')
  breakTime: string; //中断产生的时间戳

  // @Column({
  //   type: 'enum',
  //   enum: logBreakType,
  //   default: logBreakType.internal,
  // })
  // type: logBreakType; //中断的类型，枚举值
  @Column({ type: 'int', default: 0 })
  type: number; // 中断的类型，枚举值
}
