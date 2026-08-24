package core

type CommonroomError struct {
	IsCommonroomError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCommonroomError(code string, msg string, ctx *Context) *CommonroomError {
	return &CommonroomError{
		IsCommonroomError: true,
		Sdk:              "Commonroom",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CommonroomError) Error() string {
	return e.Msg
}
