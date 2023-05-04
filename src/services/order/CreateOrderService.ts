import prismaClient from "../../prisma";

interface OrderRequest{
    userService: number;
    name: string;
}

class CreateOrderService{
    async execute({userService, name}: OrderRequest){

        const order = await prismaClient.requisicaoServico.create({
            data:{
                userService: userService,
                name: name
            }
        })

        return order;

    }
}

export { CreateOrderService }