import { FastifyInstance } from "fastify";
import { 
    registrarPetController, 
    listarTodosPetsController,
    listarPetPorIdController,
    listarPetsPorClienteController, 
    atualizarPetController, 
    deletarPetController 
} from "../controllers/petsController.js";

async function petsRoutes(fastify: FastifyInstance) {
    fastify.post('/', registrarPetController);
    fastify.get('/', listarTodosPetsController);
    fastify.get("/pets/:id", listarPetPorIdController);
    fastify.get("/clientes/:id/pets", listarPetsPorClienteController);
    fastify.put('/:id', atualizarPetController);
    fastify.delete('/:id', deletarPetController);
};

export default petsRoutes;