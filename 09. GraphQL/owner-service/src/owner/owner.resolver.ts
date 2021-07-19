import { Resolver, Query, Mutation, Args, Int, ResolveReference, ResolveField } from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Mutation(() => Owner)
  createOwner(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput) {
    return this.ownerService.create(createOwnerInput);
  }

  @Query(() => [Owner], { name: 'getAllOwners' })
  findAll() {
    return this.ownerService.findAll();
  }

  @Query(() => Owner, { name: 'owner' })
  findOne(@Args('id') id: string) {
    return this.ownerService.findOne(id);
  }

  @Mutation(() => Owner)
  updateOwner(@Args('id') id: string, @Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput) {
    return this.ownerService.update(id, updateOwnerInput);
  }

  @Mutation(() => Owner)
  removeOwner(@Args('id') id: string) {
    return this.ownerService.remove(id);
  }

  @ResolveReference()
  resolveReference(ref: {__typename: string, id: string}) {
    return this.ownerService.findOne(ref.id);
  }

}
