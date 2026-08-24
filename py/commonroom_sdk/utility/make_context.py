# Commonroom SDK utility: make_context

from commonroom_sdk.core.context import CommonroomContext


def make_context_util(ctxmap, basectx):
    return CommonroomContext(ctxmap, basectx)
