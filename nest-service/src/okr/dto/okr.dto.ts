// OKR - 状态
export enum okrStatus {
  QUIT, // 放弃
  WORKING, // 未开始
  DONE, // 完成
}

/**
 * OKR - 实体信息：
 */
export class OkrDto {
  id: string; // uuid
  title: string; //256长度的字符串
  content: string; //描述，长文本
  planId: string; //所属计划的uuid
  status: okrStatus; //int类型，代表状态，0-放弃，1-进行中，2-完成
  startDate: string; // 开始时间戳
  endDate: string; // 结束时间戳
  isDelay: number; //延期次数，int类型，默认为0，延期一次就+1
}
