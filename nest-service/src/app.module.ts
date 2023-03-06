import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// 导入所有controller
import { AppController } from './app.controller';
// 导入所有provider
import { AppService } from './app.service';
// 导入所有子模块
import { OkrModule } from './okr/okr.module';

//导入所有的实体,进行数据库实体注册
import { PlanEntiry, OkrEntity, TomatoEntity, LogEntity } from './okr/entities';

@Module({
  imports: [
    // 开发环境连接mysql
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   port: 3306,
    //   host: 'localhost',
    //   username: 'root',
    //   password: '123456',
    //   database: 'okr',
    //   entities: [PlanEntiry, OkrEntity, TomatoEntity, LogEntity],
    //   synchronize: true,
    // }),
    // 本地链接sqlite
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'okr.sqlite3',
      entities: [PlanEntiry, OkrEntity, TomatoEntity, LogEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
    OkrModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
