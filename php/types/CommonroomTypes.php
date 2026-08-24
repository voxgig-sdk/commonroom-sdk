<?php
declare(strict_types=1);

// Typed models for the Commonroom SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Member entity data model. */
class Member
{
    public ?string $email = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $organization = null;
    public ?float $score = null;
    public ?array $tags = null;
}

/** Request payload for Member#load. */
class MemberLoadMatch
{
    public string $community_id;
    public string $id;
}

/** Request payload for Member#list. */
class MemberListMatch
{
    public string $community_id;
}

