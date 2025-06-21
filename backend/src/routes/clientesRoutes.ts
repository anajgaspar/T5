import { FastifyInstance } from "fastify";
import { 
  registrarClienteController, 
  listarClientesController, 
  listarClientePeloIdController, 
  atualizarClientePeloIdController, 
  deletarClientePeloIdController 
} from "../controllers/clientesController.js";

async function clientesRoutes(fastify: FastifyInstance) {
  fastify.post('/', registrarClienteController);
  fastify.get('/', listarClientesController);
  fastify.get('/:id', listarClientePeloIdController);
  fastify.put('/:id', atualizarClientePeloIdController);
  fastify.delete('/:id', deletarClientePeloIdController);
};

export default clientesRoutes;