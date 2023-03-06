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
import { tomatoStatus } from './dto/tomato.dto';

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
      return {
        status: 500,
        message: '数据插入失败',
        body: e,
      } as HttpResponseType;
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
      return {
        status: 500,
        message: '数据更新失败',
        body: e,
      } as HttpResponseType;
    }
  }

  //  查询计划
  async select(body) {
    try {
      const result = await this.repository.findAndCount({ where: body });
      return { status: 200, body: result } as HttpResponseType;
    } catch (e) {
      return {
        status: 500,
        body: e,
        message: '查询计划错误',
      } as HttpResponseType;
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
      const result = await this.repository.update(
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

  //  OKR延期
  async delay(id: string) {
    try {
      const result = await this.repository.findOne({ where: { id } });
      const affected = await this.repository.update(
        { id },
        { isDelay: result.isDelay + 1 },
      );
      return {
        status: 200,
        body: affected,
      } as HttpResponseType;
    } catch (e) {
      return {
        status: 500,
        message: '更新isDelay错误',
        body: e,
      } as HttpResponseType;
    }
  }

  //  放弃
  async quit(id: string) {
    try {
      const affected = await this.repository.update(
        { id: id },
        {
          status: 0,
        },
      );
      return { status: 200, body: affected } as HttpResponseType;
    } catch (e) {
      return {
        status: 500,
        message: '修改okr的status失败',
        body: e,
      } as HttpResponseType;
    }
  }

  // 查询 okr : 不分页，直接查所有
  async select(body: OkrEntity) {
    try {
      const result = await this.repository.findAndCount({ where: body });
      return { status: 200, body: result } as HttpResponseType;
    } catch (e) {
      return {
        status: 500,
        body: e,
        message: '查询okr错误',
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

  //  创建番茄钟
  async create(body: TomatoEntity) {
    try {
      const result = await this.repository.insert(body);
      return { status: 200, body: result } as HttpResponseType;
    } catch (e) {
      return {
        status: 500,
        message: '创建番茄钟失败',
        body: e,
      } as HttpResponseType;
    }
  }

  //  修改番茄钟
  async update(body: TomatoEntity) {
    try {
      const affected = await this.repository.update(
        { id: body.id },
        {
          title: body.title,
          content: body.content,
          startDate: body.startDate,
          endDate: body.endDate,
        },
      );
      return { status: 200, body: affected } as HttpResponseType;
    } catch (e) {
      return {
        status: 500,
        message: '修改番茄钟失败',
        body: e,
      } as HttpResponseType;
    }
  }

  //  完成 or 放弃 ，番茄钟
  async done(body: TomatoEntity) {
    try {
      const affected = await this.repository.update(
        { id: body.id },
        { status: body.status },
      );
      return { status: 200, body: affected } as HttpResponseType;
    } catch (e) {
      return {
        status: 500,
        message: '修改番茄钟状态错误',
        body: e,
      } as HttpResponseType;
    }
  }
  // 查询番茄钟:不分页
  async select(body: TomatoEntity) {
    try {
      const result = await this.repository.findAndCount({ where: body });
      return { status: 200, body: result } as HttpResponseType;
    } catch (e) {
      return {
        status: 500,
        body: e,
        message: '查询 番茄钟 错误',
      } as HttpResponseType;
    }
  }
}

// ----------------   log    -----------------------
@Injectable()
export class LogService {
  // 初始化时，注册repository
  constructor(
    @InjectRepository(LogEntity)
    private readonly repository: Repository<LogEntity>,
  ) {}

  //  创建log
  async create(body: LogEntity) {
    try {
      const result = await this.repository.insert(body);
      return { status: 200, body: result } as HttpResponseType;
    } catch (e) {
      return {
        status: 500,
        body: e,
        message: '创建中断日志失败',
      } as HttpResponseType;
    }
  }
}
