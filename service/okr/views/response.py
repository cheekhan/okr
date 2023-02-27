def error_response(err):
    """
    处理错误情况下的请求，传入错误的原因
    后期细化错误码
    """
    return {
        "code": 500,
        "message": err
    }


def success_response(body, err="请求成功"):
    """
    正常情况的请求响应
    """
    return {
        "code": 200,
        "message": err,
        "body": body
    }
