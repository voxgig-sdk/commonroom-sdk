import { CommonroomEntityBase } from '../CommonroomEntityBase';
import type { CommonroomSDK } from '../CommonroomSDK';
import type { Control } from '../types';
import type { Member, MemberLoadMatch, MemberListMatch } from '../CommonroomTypes';
declare class MemberEntity extends CommonroomEntityBase<Member> {
    constructor(client: CommonroomSDK, entopts: any);
    make(this: MemberEntity): MemberEntity;
    load(this: any, reqmatch?: MemberLoadMatch, ctrl?: Control): Promise<MemberEntity>;
    list(this: any, reqmatch?: MemberListMatch, ctrl?: Control): Promise<MemberEntity[]>;
}
export { MemberEntity };
