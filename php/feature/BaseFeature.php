<?php
declare(strict_types=1);

// Commonroom SDK base feature

class CommonroomBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CommonroomContext $ctx, array $options): void {}
    public function PostConstruct(CommonroomContext $ctx): void {}
    public function PostConstructEntity(CommonroomContext $ctx): void {}
    public function SetData(CommonroomContext $ctx): void {}
    public function GetData(CommonroomContext $ctx): void {}
    public function GetMatch(CommonroomContext $ctx): void {}
    public function SetMatch(CommonroomContext $ctx): void {}
    public function PrePoint(CommonroomContext $ctx): void {}
    public function PreSpec(CommonroomContext $ctx): void {}
    public function PreRequest(CommonroomContext $ctx): void {}
    public function PreResponse(CommonroomContext $ctx): void {}
    public function PreResult(CommonroomContext $ctx): void {}
    public function PreDone(CommonroomContext $ctx): void {}
    public function PreUnexpected(CommonroomContext $ctx): void {}
}
