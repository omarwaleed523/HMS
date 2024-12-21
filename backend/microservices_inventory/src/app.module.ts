/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://angrym21:gQrNDXcas6q92zTu@cluster0.0sauq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
    InventoryModule,
  ],
})
export class AppModule {}
