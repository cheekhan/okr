import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import {
  LogService,
  OkrService,
  PlanService,
  TomatoService,
} from './okr.service';
import {
  PlanCreatePipe,
  PlanUpdatePipe,
  PlanSelectPipe,
} from './pipes/plan.pipe';

@Controller('okr')
export class OkrController {
  constructor(
    private readonly planService: PlanService,
    private readonly okrService: OkrService,
    private readonly tomatoService: TomatoService,
    private readonly logService: LogService,
  ) {}

  // 计划 - 新建
  @Post('plan/create')
  @UsePipes(new PlanCreatePipe())
  planCreate(@Body() body) {
    return this.planService.create(body);
  }

  // 计划 - 修改
  @Post('plan/update')
  @UsePipes(new PlanUpdatePipe())
  planUpdate(@Body() body) {
    return this.planService.update(body);
  }

  //   计划 - 查询
  @Post('plan/select')
  @UsePipes(new PlanSelectPipe())
  planSelect(@Body() body) {
    return this.planService.select(body);
  }
}
