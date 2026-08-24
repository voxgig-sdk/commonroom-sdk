<?php
declare(strict_types=1);

// Commonroom SDK utility: prepare_body

class CommonroomPrepareBody
{
    public static function call(CommonroomContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
