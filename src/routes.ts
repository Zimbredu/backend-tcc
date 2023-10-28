import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateTaskController } from './controllers/task/CreateTaskController';
import { ListTaskController } from './controllers/task/ListTaskController';

import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';

import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';

import { ListOrdersController } from './controllers/order/ListOrdersController';

import { DatailOrderController } from './controllers/order/DatailOrderController';

import { FinishOrderController } from './controllers/order/FinishOrderController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

/* --ROTAS CADASTROUSUARIO-- */
//rota p/ cadastrar usuário
router.post('/users', new CreateUserController().handle);
// rota p/ login (/session)
router.post('/login', new AuthUserController().handle);
// rota p/ buscar informações do usuáio
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

/* --Rotas CATEGORIASERVICO */
// rota para cadastrar um servico(tipo de projeto)
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
// rota para bucar/listar todos servico(tipo de projeto)
router.get('/category' ,isAuthenticated, new ListCategoryController().handle);

/* --ROTAS SERVICO-- */
// rota para criar um serviço/tarefa.
/* router.post('/tasks',isAuthenticated, upload.single('file'), new CreateServicoController().handle); */
router.post('/tasks',isAuthenticated, new CreateTaskController().handle);
// rota para lista um produto pelo id_Categoria.
router.get('/category/service',isAuthenticated, new ListTaskController().handle);

/* --ROTAS ORDER-- */
// rota para cadastrar uma ordem de serviço.
router.post('/order',isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);

// rota para adicionar um integrante a equipe.
router.post('/order/add', isAuthenticated, new AddItemController().handle);
// rota para deletar um integrante da equipe.
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle);
// rota para atualizar um requisiçãoServico de (true para false).
router.put('/order/send', isAuthenticated, new SendOrderController().handle);

// rota para listar todos os serviços/task confirmado, mas não finalizados.
router.get('/orders', isAuthenticated, new ListOrdersController().handle);
// rota para listar os detalhes serviço/task
router.get('/order/detail', isAuthenticated, new DatailOrderController().handle);
// rota para finalizar uma tarefa.
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle);

export { router }