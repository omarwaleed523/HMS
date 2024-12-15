import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  bloodGroup: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
