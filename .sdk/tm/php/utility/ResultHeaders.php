<?php
declare(strict_types=1);

// Commonroom SDK utility: result_headers

class CommonroomResultHeaders
{
    public static function call(CommonroomContext $ctx): ?CommonroomResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
