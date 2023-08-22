import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common/decorators';
import { Test, TestingModule } from '@nestjs/testing';
import { leave } from './schema/leave.schema';
import * as mongoose from 'mongoose';
import { NotFoundException } from '@nestjs/common';
// import { LeaveService } from './leave.service';

describe('LeaveService', () => {
  let service: LeaveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeaveService],
    }).compile();

    service = module.get<LeaveService>(LeaveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

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
