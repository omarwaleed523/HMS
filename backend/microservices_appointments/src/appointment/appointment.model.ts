/* eslint-disable prettier/prettier */
import { Schema, Document, model } from 'mongoose';

export interface Appointment extends Document {
  patientName: string;
  patientAge: number;
  doctor: string;
  time: string;
  date: string;
}

export const AppointmentSchema = new Schema({
  patientName: { type: String, required: true },
  patientAge: { type: Number, required: true },
  doctor: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
});

export const AppointmentModel = model<Appointment>('Appointment', AppointmentSchema);
