import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){

        //Verificar se ele enviou um email.
        if(!email){
            throw new Error('Email incorreto.')
        }

        //Verificar se este email já está cadastrado na plataforma.
        const userAlreadyExists = await prismaClient.cadastroUsuario.findFirst({
            where:{
                email: email
            }

        })
        if(userAlreadyExists){
            throw new Error('Email já cadastrado.')
        }

        /* Criptografando a senha do usuáiro*/
        const passwordHash = await hash(password, 8);

        /* Cadastrando um usuário */
        const user = await prismaClient.cadastroUsuario.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
            },
            select:{
                id: true,
                name: true,
                email: true,
            }
        })
        return user;
    }
}

export { CreateUserService }