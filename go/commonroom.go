package voxgigcommonroomsdk

import (
	"github.com/voxgig-sdk/commonroom-sdk/go/core"
	"github.com/voxgig-sdk/commonroom-sdk/go/entity"
	"github.com/voxgig-sdk/commonroom-sdk/go/feature"
	_ "github.com/voxgig-sdk/commonroom-sdk/go/utility"
)

// Type aliases preserve external API.
type CommonroomSDK = core.CommonroomSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CommonroomEntity = core.CommonroomEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CommonroomError = core.CommonroomError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewMemberEntityFunc = func(client *core.CommonroomSDK, entopts map[string]any) core.CommonroomEntity {
		return entity.NewMemberEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCommonroomSDK = core.NewCommonroomSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCommonroomSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CommonroomSDK  { return NewCommonroomSDK(nil) }
func Test() *CommonroomSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
