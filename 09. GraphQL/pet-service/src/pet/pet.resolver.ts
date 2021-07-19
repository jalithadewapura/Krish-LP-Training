import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Owner } from './entities/owner.entity';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private readonly petService: PetService) {}

  @Mutation(() => Pet)
  createPet(@Args('createPetInput') createPetInput: CreatePetInput) {
    return this.petService.create(createPetInput);
  }

  @Query(() => [Pet], { name: 'getAllPets' })
  findAll() {
    return this.petService.findAll();
  }

  @Query(() => Pet, { name: 'pet' })
  findOne(@Args('id') id: string) {
    return this.petService.findOne(id);
  }

  @Mutation(() => Pet)
  updatePet(@Args('id') id: string, @Args('updatePetInput') updatePetInput: UpdatePetInput) {
    return this.petService.update(id, updatePetInput);
  }

  @Mutation(() => Pet)
  removePet(@Args('id') id: string){
    return this.petService.remove(id);
  }

  
  @ResolveField( (of) => Owner)
  owner(@Parent() pet: Pet) {
    return { __typename: "Owner", id: pet.ownerId };
  } 
}
