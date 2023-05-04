
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface AuthRequest{
    email: string;
    password: string;
}


class AuthUserService{
    async execute({ email, password }: AuthRequest){
        //Verificar se o email existe.
        const user = await prismaClient.cadastroUsuario.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error('Usuário ou senha incorreto.')
        }

        //Verificar se a senha enviada está correta.
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error('Usuário ou senha incorreto.')
        }

        //Se deu tudo certo gerar token para usuário.
        const token = sign(
            {
                name: user.name,
                email: email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return { 
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        };
    }
}

export {AuthUserService}