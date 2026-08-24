# Commonroom SDK exists test

import pytest
from commonroom_sdk import CommonroomSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CommonroomSDK.test(None, None)
        assert testsdk is not None
