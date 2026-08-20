// Typed models for the Commonroom SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Member {
  email?: string
  id?: string
  name?: string
  organization?: string
  score?: number
  tags?: any[]
}

export interface MemberLoadMatch {
  community_id: string
  id: string
}

export interface MemberListMatch {
  community_id: string
}

