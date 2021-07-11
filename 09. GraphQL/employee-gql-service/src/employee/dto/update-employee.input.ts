import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class UpdateEmployeeDTO {
    @Field()
    id: string
    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    designation: string
    @Field({nullable: true})
    city: string
    @Field({nullable: true})
    projectId: string
}