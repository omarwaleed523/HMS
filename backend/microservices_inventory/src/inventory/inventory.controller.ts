/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Medicine } from './inventory.model';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  async createMedicine(@Body() medicine: Medicine): Promise<Medicine> {
    return await this.inventoryService.createMedicine(medicine);
  }

  @Get()
  async getAllMedicines(): Promise<Medicine[]> {
    return await this.inventoryService.getAllMedicines();
  }

  @Put(':id')
  async updateMedicine(@Param('id') id: string, @Body() updatedFields: Partial<Medicine>): Promise<Medicine> {
    return await this.inventoryService.updateMedicine(id, updatedFields);
  }

  @Delete(':id')
  deleteMedicine(@Param('id') id: string): void {
    this.inventoryService.deleteMedicine(id);
  }
}
