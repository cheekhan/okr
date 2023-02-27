import { Body, Controller, Post } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanEntity } from './plan.entity';

@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  // add
  @Post('add')
  async create(@Body() body: PlanEntity) {
    return await this.planService.create(body);
  }

  //  update

  // select
}
