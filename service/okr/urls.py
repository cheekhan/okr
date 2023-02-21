from django.urls import path
from .views import planViews, itemViews, tomatoViews

urlpatterns = [
    # 计划相关接口
    path('plan/add', planViews.plan_add, 'plan_add'),
    path('plan/update', planViews.plan_update, 'plan_update'),
    path('plan/select', planViews.plan_select, 'plan_select'),
    path('plan/progress', planViews.plan_progress, 'plan_progress'),
    path('plan/delete', planViews.plan_delete, 'plan_delete'),
    #     okr相关接口
    path('item/add', itemViews.okr_add, 'okr_add'),
    path('item/update', itemViews.okr_update, 'okr_update'),
    path('item/select', itemViews.okr_select, 'okr_select'),
    path('item/progress', itemViews.okr_progress, 'okr_progress'),
    path('item/delete', itemViews.okr_delete, 'okr_delete'),
    #     tomato相关接口
    path('tomato/add', tomatoViews.tomato_add, 'tomato_add'),
    path('tomato/update', tomatoViews.tomato_update, 'tomato_update'),
    path('tomato/select', tomatoViews.tomato_select, 'tomato_select'),
    path('tomato/progress', tomatoViews.tomato_progress, 'tomato_progress'),
    path('tomato/delete', tomatoViews.tomato_delete, 'tomato_delete'),
]
