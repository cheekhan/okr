import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { PlanDto } from '../dto/plan.dto';

// 新建时的验证：必须有title
@Injectable()
export class PlanCreatePipe implements PipeTransform {
  transform(value: PlanDto, metadata: ArgumentMetadata): PlanDto {
    if (!value.title) {
      throw new HttpException(
        {
          message: '缺少title参数',
          body: value,
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return value;
  }
}

// 修改时的验证和转换：必须有id，然后精简key
@Injectable()
export class PlanUpdatePipe implements PipeTransform {
  transform(value: PlanDto, metadata: ArgumentMetadata): PlanDto {
    if (!value.id) {
      throw new HttpException(
        {
          message: '未传入id',
          body: value,
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return value;
  }
}
