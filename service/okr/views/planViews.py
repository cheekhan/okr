from django.http import JsonResponse
from okr.models.index import PlanDto
from .response import error_response, success_response
from django.views.decorators.http import require_GET, require_POST


# @require_POST()
def plan_add(request):
    '''
    添加计划
    '''
    result = {}
    return JsonResponse(request)


def plan_update(request):
    '''
    修改计划
    '''
    result = {}
    return JsonResponse(result)


def plan_select(request):
    '''
    查询计划
    '''
    result = {}
    return JsonResponse(result)


def plan_progress(request):
    '''
    获取计划完成就induced
    '''
    result = {}
    return JsonResponse(result)


def plan_delete(request):
    '''
    删除计划
    '''
    result = {}
    return JsonResponse(result)
