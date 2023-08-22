import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Leave_Type {
  HOURLY = 'Hourly',
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
}

@Schema({
  timestamps: true,
})
export class leave {
  @Prop()
  leave_title: string;

  @Prop()
  leave_type: Leave_Type;

  @Prop()
  leave_date_from: Date;

  @Prop()
  leave_date_to: Date;

  @Prop()
  leave_hour_from: number;

  @Prop()
  leave_hour_to: number;

  @Prop()
  leave_description: string;

  @Prop()
  leave_permission: boolean;
}

export const LeaveSchema = SchemaFactory.createForClass(leave);
