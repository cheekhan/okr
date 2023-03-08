import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { PlanEntiry, OkrEntity, TomatoEntity, LogEntity } from './okr/entities';
import { ok } from 'assert';

@Injectable()
export class AppService {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  // 获取整个树结构
  async getTree() {
    try {
      // 拼接plans - map
      const plans = await this.entityManager.find(PlanEntiry);
      const planMap = {};
      plans.forEach((v) => {
        planMap[v.id] = v;
      });
      // 拼接 okr - map
      const okrs = await this.entityManager.find(OkrEntity);
      const okrMap = {};
      okrs.forEach((v) => {
        okrMap[v.id] = v;
      });
      // 拼接 tomato - map
      const tomatoes = await this.entityManager.find(TomatoEntity);
      const tomatoMap = {};
      tomatoes.forEach((v) => {
        tomatoMap[v.id] = v;
      });
      // 拼接 log - map
      const logs = await this.entityManager.find(LogEntity);
      // 开始逆向拼接
      // 拼接log到tomato
      logs.forEach((v) => {
        if (tomatoMap[v.tomatoId].logs) {
          tomatoMap[v.tomatoId].logs.push(v);
        } else {
          tomatoMap[v.tomatoId].logs = [v];
        }
      });
      // 拼接 tomato 到 okr
      tomatoes.forEach((v) => {
        if (okrMap[v.okrId].tomatoes) {
          okrMap[v.okrId].tomatoes.push(v);
        } else {
          okrMap[v.okrId].tomatoes = [v];
        }
      });
      // 拼接okr 到 plan
      okrs.forEach((v) => {
        if (planMap[v.planId].okrs) {
          planMap[v.planId].okrs.push(v);
        } else {
          planMap[v.planId].okrs = [v];
        }
      });
      return { status: 200, body: plans } as HttpResponseType;
    } catch (e) {
      return { status: 500, message: '', body: e } as HttpResponseType;
    }
  }
}
