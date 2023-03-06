import { Controller, Post, Body, UsePipes, Get, Param } from '@nestjs/common';
import {
  LogService,
  OkrService,
  PlanService,
  TomatoService,
} from './okr.service';
import { PlanCreatePipe, PlanUpdatePipe } from './pipes/plan.pipe';

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
  planSelect(@Body() body) {
    return this.planService.select(body);
  }

  // 计划 - 放弃
  @Get('plan/quit/:id')
  planQuit(@Param('id') id) {
    return this.planService.quit(id);
  }

  //  OKR - 创建
  @Post('okr/create')
  okrCreate(@Body() body) {
    return this.okrService.create(body);
  }

  //  OKR - 更新
  @Post('okr/update')
  okrUpdate(@Body() body) {
    return this.okrService.update(body);
  }

  //  OKR 延期
  @Get('okr/delay/:id')
  okrDelay(@Param('id') id) {
    return this.okrService.delay(id);
  }

  //  OKR 放弃
  @Get('okr/quit/:id')
  okrQuit(@Param('id') id) {
    return this.okrService.quit(id);
  }

  //  查询OKR
  @Post('okr/select')
  okrSelect(@Body() body) {
    return this.okrService.select(body);
  }

  //  tomato - 创建
  @Post('tomato/create')
  tomatoCreate(@Body() body) {
    return this.tomatoService.create(body);
  }

  //  tomato - 修改
  @Post('tomato/update')
  tomatoUpdate(@Body() body) {
    return this.tomatoService.update(body);
  }

  //  tomato - 修改状态：完成 or 放弃
  @Post('tomato/done')
  tomatoDone(@Body() body) {
    return this.tomatoService.done(body);
  }

  // tomato - 查询
  @Post('tomato/select')
  tomatoSelect(@Body() body) {
    return this.tomatoService.select(body);
  }

  //  log - 创建
  @Post('log/create')
  logCreate(@Body() body) {
    return this.logService.create(body);
  }
}
