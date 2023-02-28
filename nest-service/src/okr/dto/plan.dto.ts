// 计划 - 状态
export enum planStatus {
  QUIT, // 放弃
  WORKING, // 进行中
  DONE, // 完成
}

// 计划 - 类型
export enum planType {
  LANGUAGE, // 外语学习
  IT, // 职业提升：学习库、资料、项目、算法、编程语言
  IMPROVE, // 自我提升：数学、音乐、健身、茶艺等
}

/**
 * 计划 - 实体信息：
 */
export class PlanDto {
  id: string; // uuid
  title: string; //256长度的字符串
  content: string; //描述，长文本
  status: planStatus; //int类型，代表状态，0-放弃，1-进行中，2-完成
  type: planType; //int类型，枚举值【计划类型】
}
