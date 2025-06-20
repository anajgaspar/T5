import { FastifyInstance } from "fastify";
import { registrarClienteController } from '../controllers/clientesController.js';
import { listarClientesController, listarClientePeloIdController } from "../controllers/clientesController.js";
import { atualizarClientePeloIdController } from "../controllers/clientesController.js";
import { deletarClientePeloIdController } from "../controllers/clientesController.js";

async function clientesRoutes(fastify: FastifyInstance) {
  fastify.post('/', registrarClienteController);
  fastify.get('/', listarClientesController);
  fastify.get('/:id', listarClientePeloIdController);
  fastify.put('/:id', atualizarClientePeloIdController);
  fastify.delete('/:id', deletarClientePeloIdController);
};

export default clientesRoutes;