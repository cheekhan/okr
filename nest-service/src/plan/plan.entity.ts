import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

// 计划 - 状态
export enum planStatus {
  QUIT, // 放弃
  WORKING, // 进行中
  DONE, // 完成
}

// 计划 - 类型
export enum planType {
  LANGUAGE, // 外语学习
  IT, // 职业提升：学习库、资料、项目、算法、编程语言
  IMPROVE, // 自我提升：数学、音乐、健身、茶艺等
}

@Entity('plan')
export class PlanEntity {
  // 自动生成的uuid
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // 标题，256长度的字符串
  @Column({ length: 256 })
  title: string;

  // 长文本的表述
  @Column('text')
  content: string;

  // 状态，枚举
  @Column({
    type: 'enum',
    enum: planStatus,
    default: planStatus.WORKING,
  })
  status: number;

  // 计划类型：枚举
  @Column({
    type: 'enum',
    enum: planType,
    default: planType.IT,
  })
  type: number;

  // 是否已经删除
  @Column({ default: false })
  isEnable: boolean;
}

// 定义plan 的关系实体

export class PlanDto {
  id: string;
  title: string;
  content: string;
  status: number;
  type: number;
  isEnable: boolean;
}
