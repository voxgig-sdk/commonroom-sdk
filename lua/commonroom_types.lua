-- Typed models for the Commonroom SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Member
---@field email? string
---@field id? string
---@field name? string
---@field organization? string
---@field score? number
---@field tags? table

---@class MemberLoadMatch
---@field community_id string
---@field id string

---@class MemberListMatch
---@field community_id string

local M = {}

return M
