import { CreateEmployeeDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { UpdateEmployeeDTO } from './dto/update-employee.input';

@Resolver(() => Employee)
export class EmployeeResolver {

    constructor(private employeeService: EmployeeService) {}

    @Query(() => [Employee], {name: "getAllEployees"})
    async findAll(): Promise<Employee[]> {
        return await this.employeeService.findAll();
    }

    @Mutation(() => Employee, {name: "createEmployee"})
    async create(@Args('employee') createEmployeeDto: CreateEmployeeDTO): Promise<Employee> {
        return await this.employeeService.create(createEmployeeDto);
    }

    @Query(() => Employee, {name: "employee"}) 
    async findOne(@Args('id') id: string): Promise<Employee> {
        return await this.employeeService.findOne(id);
    }

    @Mutation(() => Employee, {name: 'updateEmployee'})
    async update(@Args('employee') updateEmployeeDto: UpdateEmployeeDTO) {
        return await this.employeeService.update(updateEmployeeDto);
    }

    @Mutation(() => Employee, {name: 'removeEmployee'})
    async remove(@Args('id') id: string) {
        return await this.employeeService.remove(id);
    }


    @ResolveField()
    async project(@Parent() employee: Employee): Promise<Project> {
        return this.employeeService.getProject(employee.projectId);
    }


}
