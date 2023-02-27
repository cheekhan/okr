import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// 导入所有controller
import { AppController } from './app.controller';
// 导入所有provider
import { AppService } from './app.service';
// 导入所有子模块
import { PlanModule } from './plan/plan.module';
//导入所有的实体
import { PlanEntity } from './plan/plan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: '123456',
      database: 'okr',
      entities: [PlanEntity],
      synchronize: true,
    }),
    PlanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
