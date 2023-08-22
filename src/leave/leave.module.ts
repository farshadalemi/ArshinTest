import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleFactoryOptions } from '@nestjs/mongoose';
import { LeaveController } from './leave.controller';
import { LeaveService } from './leave.service';
import { LeaveSchema } from './schema/leave.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'leave', schema: LeaveSchema }]),
  ],
  controllers: [LeaveController],
  providers: [LeaveService],
})
export class LeaveModele {}
