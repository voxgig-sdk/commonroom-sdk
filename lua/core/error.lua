-- Commonroom SDK error

local CommonroomError = {}
CommonroomError.__index = CommonroomError


function CommonroomError.new(code, msg, ctx)
  local self = setmetatable({}, CommonroomError)
  self.is_sdk_error = true
  self.sdk = "Commonroom"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CommonroomError:error()
  return self.msg
end


function CommonroomError:__tostring()
  return self.msg
end


return CommonroomError
