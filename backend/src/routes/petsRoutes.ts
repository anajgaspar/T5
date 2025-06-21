import { FastifyInstance } from "fastify";
import { 
    registrarPetController, 
    listarTodosPetsController, 
    listarPetsPorClienteController, 
    atualizarPetController, 
    deletarPetController 
} from "../controllers/petsController.js";

async function petsRoutes(fastify: FastifyInstance) {
    fastify.post('/', registrarPetController);
    fastify.get('/', listarTodosPetsController);
    fastify.get('/:id', listarPetsPorClienteController);
    fastify.put('/:id', atualizarPetController);
    fastify.delete('/:id', deletarPetController);
};

export default petsRoutes;