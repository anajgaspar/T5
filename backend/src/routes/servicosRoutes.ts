import { FastifyInstance } from "fastify";
import { 
    registrarServicoController,
    listarServicosController,
    listarServicoPeloIdController,
    atualizarServicoPeloIdController,
    deletarServicoPeloIdController
} from "../controllers/servicosController";

async function servicosRoutes(fastify: FastifyInstance) {
  fastify.post('/', registrarServicoController);
  fastify.get('/', listarServicosController);
  fastify.get('/:id', listarServicoPeloIdController);
  fastify.put('/:id', atualizarServicoPeloIdController);
  fastify.delete('/:id', deletarServicoPeloIdController);
};

export default servicosRoutes;