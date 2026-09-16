# Commonroom SDK feature factory

from commonroom_sdk.feature.base_feature import CommonroomBaseFeature
from commonroom_sdk.feature.debug_feature import CommonroomDebugFeature
from commonroom_sdk.feature.idempotency_feature import CommonroomIdempotencyFeature
from commonroom_sdk.feature.metrics_feature import CommonroomMetricsFeature
from commonroom_sdk.feature.paging_feature import CommonroomPagingFeature
from commonroom_sdk.feature.ratelimit_feature import CommonroomRatelimitFeature
from commonroom_sdk.feature.retry_feature import CommonroomRetryFeature
from commonroom_sdk.feature.test_feature import CommonroomTestFeature
from commonroom_sdk.feature.timeout_feature import CommonroomTimeoutFeature


_FEATURES = {
    "base": lambda: CommonroomBaseFeature(),
    "debug": lambda: CommonroomDebugFeature(),
    "idempotency": lambda: CommonroomIdempotencyFeature(),
    "metrics": lambda: CommonroomMetricsFeature(),
    "paging": lambda: CommonroomPagingFeature(),
    "ratelimit": lambda: CommonroomRatelimitFeature(),
    "retry": lambda: CommonroomRetryFeature(),
    "test": lambda: CommonroomTestFeature(),
    "timeout": lambda: CommonroomTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
