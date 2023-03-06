import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OkrEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid

  @Column({ length: 256, unique: true })
  title: string; //256长度的字符串

  @Column('text')
  content: string; //描述，长文本
  @Column()
  planId: string; //所属计划的uuid
  // @Column({
  //   type: 'enum',
  //   enum: okrStatus,
  //   default: okrStatus.WORKING,
  // })
  // status: okrStatus; //int类型，代表状态，0-放弃，1-进行中，2-完成
  @Column({ type: 'int', default: 1 })
  status: number; //int类型，代表状态，0-放弃，1-进行中，2-完成

  @Column('datetime')
  startDate: string; // 开始时间戳

  @Column('datetime')
  endDate: string; // 结束时间戳

  @Column({
    type: 'int',
    default: 0,
  })
  isDelay: number; //延期次数，int类型，默认为0，延期一次就+1
}
