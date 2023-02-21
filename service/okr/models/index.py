from django.db import models


class PlanDto(models.Model):
    '''
    计划：
      "id": "32长度的string",
      "title": "256长度的字符串",
      "content": "描述，长文本",
      "status": "int类型，代表状态，0-放弃，1-进行中，2-完成",
      "type": "int类型，枚举值【计划类型】",
      "okrIds": "字符串类型的数组，代表所有okr的id",
      "isEnable": "是否已经删除，Boolean值"
    '''
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=256)
    content = models.TextField()
    status = models.IntegerField()
    type = models.IntegerField()
    okrIds = models.JSONField()
    isEnable = models.BooleanField()


class OkrDto(models.Model):
    '''
    OKR :
      "id": "32长度的string",
      "title": "256长度的字符串",
      "content": "描述，长文本",
      "planId": "32长度的id，所属计划的id",
      "status": "int类型，代表状态，0-放弃，1-未开始，2-进行中，3-完成",
      "startDate": "时间戳",
      "endDate": "时间戳",
      "isDelay": "延期次数，int类型，默认为0，延期一次就+1",
      "tomatoIds": "id数组"
    '''
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=256)
    content = models.TextField()
    planId = models.IntegerField()
    status = models.IntegerField()
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    isDelay = models.IntegerField()
    tomatoIds = models.JSONField()
