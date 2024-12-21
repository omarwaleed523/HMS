import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment } from './appointment.model';

@Injectable()
export class AppointmentService {
  constructor(@InjectModel('Appointment') private readonly appointmentModel: Model<Appointment>) {}

  async create(appointment: Appointment): Promise<Appointment> {
    const newAppointment = new this.appointmentModel(appointment);
    return await newAppointment.save();
  }

  async findAll(): Promise<Appointment[]> {
    return await this.appointmentModel.find().exec();
  }

  async findOne(id: string): Promise<Appointment> {
    return await this.appointmentModel.findById(id).exec();
  }

  async update(id: string, appointment: Appointment): Promise<Appointment> {
    return await this.appointmentModel.findByIdAndUpdate(id, appointment, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.appointmentModel.deleteOne({ _id: id }).exec();
  }
}
