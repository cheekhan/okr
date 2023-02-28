import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// 计划
import { PlanDto } from './dto/plan.dto';
import { PlanEntiry } from './entities/plan.entiry';
// okr
import { OkrEntity } from './entities/okr.entity';
//tomato
import { TomatoEntity, LogEntity } from './entities/tomato.entity';

@Injectable()
export class PlanService {
  // 初始化时，注册repository
  constructor(
    @InjectRepository(PlanEntiry)
    private readonly repository: Repository<PlanEntiry>,
  ) {}

  // 创建计划
  async create(body: PlanDto) {
    try {
      return await this.repository.insert(body);
    } catch (e) {
      throw new HttpException(
        {
          message: '数据库插入错误',
          body: e,
          status: HttpStatus.FORBIDDEN,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  //  修改计划
  async update(body: PlanDto) {
    return Promise.resolve(body);
  }

  //  查询计划
  async select(body) {
    const count = await this.repository.count({});
    const arr = await this.repository.find({
      skip: body.pageNum,
      take: body.pageSize,
    });
    return {
      status: 200,
      body: {
        list: arr,
        total: count,
      },
    };
  }
}

@Injectable()
export class OkrService {
  // 初始化时，注册repository
  constructor(
    @InjectRepository(OkrEntity)
    private readonly repository: Repository<OkrEntity>,
  ) {}
}

@Injectable()
export class TomatoService {
  // 初始化时，注册repository
  constructor(
    @InjectRepository(TomatoEntity)
    private readonly repository: Repository<TomatoEntity>,
  ) {}
}

@Injectable()
export class LogService {
  // 初始化时，注册repository
  constructor(
    @InjectRepository(LogEntity)
    private readonly repository: Repository<LogEntity>,
  ) {}
}
