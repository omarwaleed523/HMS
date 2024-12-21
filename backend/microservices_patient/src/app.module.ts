import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://hamzamoustafa:cAgJbIlFR1azXzHz@cluster0.pnrxf.mongodb.net/'),
    PatientModule,
  ],
})
export class AppModule {}
