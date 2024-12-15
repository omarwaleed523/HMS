import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment.model';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  async create(@Body() createAppointmentDto: Appointment): Promise<Appointment> {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  async findAll(): Promise<Appointment[]> {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Appointment> {
    return this.appointmentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAppointmentDto: Appointment): Promise<Appointment> {
    return this.appointmentService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.appointmentService.delete(id);
  }
}
