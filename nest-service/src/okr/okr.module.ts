import { Module } from '@nestjs/common';
import { OkrController } from './okr.controller';
import {
  PlanService,
  OkrService,
  TomatoService,
  LogService,
} from './okr.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanEntiry, OkrEntity, TomatoEntity, LogEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlanEntiry, OkrEntity, TomatoEntity, LogEntity]),
  ],
  controllers: [OkrController],
  providers: [PlanService, OkrService, TomatoService, LogService],
})
export class OkrModule {}
