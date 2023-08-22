import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LeaveService } from './leave.service';
import { leave } from './schema/leave.schema';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';

@Controller('leave')
export class LeaveController {
  constructor(private leaveService: LeaveService) {}

  @Get()
  async getAllLeaves(): Promise<leave[]> {
    return this.leaveService.findAll();
  }

  @Get(':id')
  async getleave(
    @Param('id')
    id: string,
  ): Promise<leave> {
    return this.leaveService.findById(id);
  }

  @Post()
  async createLeave(
    @Body()
    leave: CreateLeaveDto,
  ): Promise<leave> {
    return this.leaveService.create(leave);
  }

  @Put(':id')
  async updateLeave(
    @Param('id')
    id: string,
    @Body()
    leave: UpdateLeaveDto,
  ): Promise<leave> {
    return this.leaveService.updateById(id, leave);
  }

  @Delete(':id')
  async deleteleave(
    @Param('id')
    id: string,
  ): Promise<leave> {
    return this.leaveService.deleteById(id);
  }
}
