import { Context } from './Context';
declare class CommonroomError extends Error {
    isCommonroomError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CommonroomError };
