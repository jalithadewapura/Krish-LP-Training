import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {

  constructor(@InjectRepository(Project) private projectRepository: Repository<Project> ) {}

  async create(createProjectInput: CreateProjectInput): Promise<Project> {
    const project = this.projectRepository.create(createProjectInput);
    return await this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find({
      relations: ["employees"]
    });
  }

  findOne(id: string): Promise<Project> {
    return this.projectRepository.findOne(id);
  }

  async update(id: string, updateProjectInput: UpdateProjectInput): Promise<Project> {
    return await this.projectRepository.save(updateProjectInput);
  }

  async remove(id: string) {
    const project = await this.findOne(id);
    if(project){
      const deleteResult = await this.projectRepository.delete(id);
      if(deleteResult.affected)
        return project;
    }
    return new NotFoundException(`Record not found by id ${id}`);
  }
}
