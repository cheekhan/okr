// 响应的结构
interface HttpResponseType {
  status: 200 | 400 | 500; // 200-正常 ， 400-业务错误，500-服务预料之外的错误
  message?: string;
  body?: objectBody | listBody;
}
// 如果响应是列表时的结构
interface listBody {
  total: number;
  list: any[];
}
// 响应结构是对象时
interface objectBody {
  [x: string]: any;
}
