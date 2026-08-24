<?php
declare(strict_types=1);

// Commonroom SDK utility: result_body

class CommonroomResultBody
{
    public static function call(CommonroomContext $ctx): ?CommonroomResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
