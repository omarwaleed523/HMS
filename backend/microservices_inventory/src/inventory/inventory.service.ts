/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medicine } from './inventory.model';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(Medicine.name) private medicineModel: Model<Medicine>
  ) {}

  async createMedicine(medicine: Medicine): Promise<Medicine> {
    const newMedicine = new this.medicineModel(medicine);
    return newMedicine.save();
  }

  async getAllMedicines(): Promise<Medicine[]> {
    return this.medicineModel.find().exec();
  }

  async updateMedicine(id: string, updatedFields: Partial<Medicine>): Promise<Medicine> {
    return this.medicineModel.findByIdAndUpdate(id, updatedFields, { new: true }).exec();
  }

  async deleteMedicine(id: string): Promise<void> {
    await this.medicineModel.findByIdAndDelete(id).exec();
  }
}
