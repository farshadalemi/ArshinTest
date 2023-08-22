import { Leave_Type } from "../schema/leave.schema";


export class UpdateLeaveDto{
    readonly leave_title: string;
    readonly leave_type: Leave_Type;
    readonly leave_date_from: Date;
    readonly leave_date_to: Date;
    readonly leave_hour_from: number;
    readonly leave_hour_to: number;
    readonly leave_description: string;
    readonly leave_permission: boolean;

}