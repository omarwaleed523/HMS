import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AppointmentModule } from './appointment/appointment.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB),
    AppointmentModule,
  ],
})
export class AppModule {}
