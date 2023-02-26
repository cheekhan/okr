### 1、初始文件解读

- main.ts : 入口文件
- app.module.ts : 根模块
- app.controller.ts : 路由控制单元
- app.service.ts : 基本服务单元

### 2、装饰器

- @Module
- @Controller
- @Get

### 3、`@Module`装饰器

### 4、路由装饰器

#### `@Controller`

可以传入字符串，当做整个路由的前缀

#### HTTP方法装饰器：`@Get , @Post , @Put` 等

支持传入字符串，当对应的请求方法和装饰器参数匹配时，进行调用

#### 全局路由前缀

由`NestFactory.create`创建的应用，可以调用`setGlobalPrefix`方法，来配置全局的请求前缀