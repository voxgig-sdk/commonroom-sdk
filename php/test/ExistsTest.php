<?php
declare(strict_types=1);

// Commonroom SDK exists test

require_once __DIR__ . '/../commonroom_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CommonroomSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
