// 番茄钟 - 状态
export enum tomatoStatus {
  QUIT, // 被中断
  WORKING, // 未完成
  DONE, // 完成
}

// 中断的类型
export enum logBreakType {
  internal, // 内因
  external, // 外因
}

/**
 * 番茄钟 - 实体信息：
 */
export class TomatoDto {
  id: string; // uuid
  title: string; //256长度的字符串
  content: string; //描述，长文本
  okrId: string; //所属okr的uuid
  status: tomatoStatus; //int类型，代表状态，0-放弃，1-进行中，2-完成
  startDate: string; // 开始时间戳
  endDate: string; // 结束时间戳
}

export class LogDto {
  id: string; // uuid
  tomatoId: string; //中断的那个番茄钟的id
  content: string; //描述，长文本
  breakTime: string; //中断产生的时间戳
  type: logBreakType; //中断的类型，枚举值
}
