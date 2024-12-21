import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    HttpCode,
  } from '@nestjs/common';
  import { PatientService } from './patient.service';
  import { Patient } from './patient.schema';
  
  @Controller('patients')
  export class PatientController {
    constructor(private readonly patientService: PatientService) {}
  
    @Post()
    async create(@Body() createPatientDto: Partial<Patient>): Promise<Patient> {
      return this.patientService.create(createPatientDto);
    }
  
    @Get()
    async findAll(): Promise<Patient[]> {
      return this.patientService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Patient> {
      return this.patientService.findOne(id);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() updatePatientDto: Partial<Patient>,
    ): Promise<Patient> {
      return this.patientService.update(id, updatePatientDto);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id') id: string): Promise<void> {
      return this.patientService.remove(id);
    }
  }
  