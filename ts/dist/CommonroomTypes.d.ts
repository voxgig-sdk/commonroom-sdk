export interface Member {
    email?: string;
    id?: string;
    name?: string;
    organization?: string;
    score?: number;
    tags?: any[];
}
export interface MemberLoadMatch {
    community_id: string;
    id: string;
}
export interface MemberListMatch {
    community_id: string;
}
