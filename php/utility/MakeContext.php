<?php
declare(strict_types=1);

// Commonroom SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CommonroomMakeContext
{
    public static function call(array $ctxmap, ?CommonroomContext $basectx): CommonroomContext
    {
        return new CommonroomContext($ctxmap, $basectx);
    }
}
