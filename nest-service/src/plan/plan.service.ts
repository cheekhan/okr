import { Injectable } from '@nestjs/common';
import { PlanEntity } from './plan.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlanService {
  // TODO : 这里注入都是什么意思？
  constructor(
    @InjectRepository(PlanEntity)
    private planRepository: Repository<PlanEntity>,
  ) {}

  //  保存一个计划
  async create(body: PlanEntity) {
    console.log('service：---------');
    console.log(body);
    console.log(this.planRepository);
    return await this.planRepository.insert(body);
  }
}
