import { Injectable, NotFoundException } from '@nestjs/common';
import mongoose from 'mongoose';
import { leave } from './schema/leave.schema';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';

@Injectable()
export class LeaveService {
  constructor(
    @InjectModel(leave.name)
    private leaveModel: mongoose.Model<leave>,
  ) {}

  async findAll(): Promise<leave[]> {
    const leaves = await this.leaveModel.find();
    return leaves;
  }

  async findById(id: string): Promise<leave> {
    const leave = await this.leaveModel.findById(id);

    if (!leave) {
      throw new NotFoundException('No leave request found.');
    }

    return leave;
  }

  async create(leave: leave): Promise<leave> {
    const res = await this.leaveModel.create(leave);
    return res;
  }

  async updateById(id: string, leave: leave): Promise<leave> {
    return await this.leaveModel.findByIdAndUpdate(id, leave, {
      new: true,
      runvalidators: true,
    });
  }

  async deleteById(id: string): Promise<leave> {
    return await this.leaveModel.findByIdAndDelete(id);
  }
}

// function InjectModel(
//   name: any,): (
//   target: typeof LeaveService,
//   propertyKey: undefined,
//   parameterIndex: 0,) => void {
//   throw new Error('Function not implemented.');
// }
