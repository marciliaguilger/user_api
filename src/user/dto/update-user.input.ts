import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType() 

export class UpdateUserInput{
    // não precisa colocar field pois a dependencias ja entende q é um field
    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio'})
    @IsOptional() //as validações acima só serão aplicadas se o campo for informado
    name?: string;
    
    @IsEmail()
    @IsNotEmpty({message: 'Este campo não pode estar vazio'})
    @IsOptional()
    email?: string
}