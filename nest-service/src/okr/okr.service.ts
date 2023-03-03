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

// ----------------   计划    -----------------------
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
      const response: HttpResponseType = {
        status: 200,
        body: await this.repository.insert(body),
      };
      return response;
    } catch (e) {
      const response: HttpResponseType = {
        status: 500,
        message: '数据插入失败',
        body: e,
      };
      throw new HttpException(response, HttpStatus.OK);
    }
  }

  //  修改计划
  async update(body: PlanDto) {
    try {
      const result = await this.repository.update(
        { id: body.id },
        {
          title: body.title,
          content: body.content,
          type: body.type,
        },
      );
      const response: HttpResponseType = {
        status: 200,
        body: { affected: result.affected },
      };
      return response;
    } catch (e) {
      const response: HttpResponseType = {
        status: 500,
        message: '数据更新失败',
        body: e,
      };
      throw new HttpException(response, HttpStatus.OK);
    }
  }

  //  查询计划
  async select(body) {
    try {
      const count = await this.repository.count({});
      const arr = await this.repository.find({
        skip: body.pageNum,
        take: body.pageSize,
      });
      const response: HttpResponseType = {
        status: 200,
        body: {
          list: arr,
          total: count,
        },
      };
      return response;
    } catch (e) {
      const response: HttpResponseType = {
        status: 500,
        message: '数据查询失败',
        body: e,
      };
      throw new HttpException(response, HttpStatus.OK);
    }
  }

  // 放弃 - 计划
  async quit(id: string) {
    try {
      const result = await this.repository.update({ id }, { status: 0 });
      const response: HttpResponseType = {
        status: 200,
        body: { affected: result.affected },
      };
      return response;
    } catch (e) {
      const response: HttpResponseType = {
        status: 500,
        message: '更新状态失败',
        body: e,
      };
      throw new HttpException(response, HttpStatus.OK);
    }
  }
}

// ----------------   OKR    -----------------------
@Injectable()
export class OkrService {
  // 初始化时，注册repository
  constructor(
    @InjectRepository(OkrEntity)
    private readonly repository: Repository<OkrEntity>,
  ) {}

  //  创建
  async create(body: OkrEntity) {
    try {
      const response: HttpResponseType = {
        status: 200,
        body: await this.repository.insert(body),
      };
      return response;
    } catch (e) {
      const response: HttpResponseType = {
        status: 500,
        message: '创建OKR失败',
        body: e,
      };
      return response;
    }
  }
  // 更新OKR
  async update(body: OkrEntity) {
    try {
      const result = this.repository.update(
        { id: body.id },
        {
          title: body.title,
          startDate: body.startDate,
          content: body.content,
          endDate: body.endDate,
        },
      );
      const response: HttpResponseType = {
        status: 200,
        body: result,
      };
      return response;
    } catch (e) {
      return {
        status: 500,
        message: '更新OKR错误',
        body: e,
      } as HttpResponseType;
    }
  }
}

// ----------------   tomato    -----------------------
@Injectable()
export class TomatoService {
  // 初始化时，注册repository
  constructor(
    @InjectRepository(TomatoEntity)
    private readonly repository: Repository<TomatoEntity>,
  ) {}
}

// ----------------   log    -----------------------
@Injectable()
export class LogService {
  // 初始化时，注册repository
  constructor(
    @InjectRepository(LogEntity)
    private readonly repository: Repository<LogEntity>,
  ) {}
}
