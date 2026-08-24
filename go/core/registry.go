package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewMemberEntityFunc func(client *CommonroomSDK, entopts map[string]any) CommonroomEntity

