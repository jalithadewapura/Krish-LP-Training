import { PetService } from './pet.service';
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Owner } from "./entities/owner.entity";
import { Pet } from './pet.schema';

@Resolver((of) => Owner)
export class OwnerResolver {
    constructor(private readonly petService: PetService) {}

    @ResolveField((of) => [Pet])
    async pets(@Parent() owner: Owner): Promise<Pet[]> {
        return await this.petService.findOfOwner(owner.id); 
    }

}