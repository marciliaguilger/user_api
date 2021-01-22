import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType() 

export class CreateUserInput{
    // não precisa colocar field pois a dependencias ja entende q é um field
    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio'})
    name: string;
    
    @IsEmail()
    @IsNotEmpty({message: 'Este campo não pode estar vazio'})
    email: string
}