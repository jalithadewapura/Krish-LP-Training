import { UpdateEmployeeDTO } from './dto/update-employee.input';
import { Project } from './../project/entities/project.entity';
import { ProjectService } from './../project/project.service';
import { CreateEmployeeDTO } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>,
        private projectService: ProjectService) {}

    async findAll(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

    async create(createEmployeeDto: CreateEmployeeDTO): Promise<Employee> {
        let employee = this.employeeRepository.create(createEmployeeDto);
        return await this.employeeRepository.save(employee);
    }

    async findOne(id: string): Promise<Employee> {
        return await this.employeeRepository.findOne(id);
    }

    async update(updateEmployeeDto: UpdateEmployeeDTO){
        return await this.employeeRepository.save(updateEmployeeDto);
    }

    async remove(id: string) {
        const employee = await this.findOne(id);
        if(employee){
            const deleteResult = await this.employeeRepository.delete(id);
            if((deleteResult).affected)
                return employee;
        }
        return new NotFoundException(`Record not found by id ${id}`);
    }

    async getProject(id: string): Promise<Project> {
        return this.projectService.findOne(id);
    }
}
