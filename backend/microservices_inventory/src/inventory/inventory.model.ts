/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Medicine extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: 'syrup' | 'tablet' | 'capsule' | 'injection' | 'soap' | 'inhaler';

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  inStock: number;

  @Prop({ required: true })
  expiryDate: Date;

  @Prop({ required: true })
  manufacturer: string;
}

export const MedicineSchema = SchemaFactory.createForClass(Medicine);