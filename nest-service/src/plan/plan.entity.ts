import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plan')
export class PlanEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 256 })
  title: string;
}
