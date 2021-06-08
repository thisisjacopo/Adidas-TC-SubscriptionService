import { IsNotEmpty } from "class-validator"

export class SubscriptionCreateDto {
    id: String
    firstName: string
    gender: string
    @IsNotEmpty()
    email: string
    @IsNotEmpty()
    consent: boolean
    @IsNotEmpty()
    dateOfBirth: Date
}