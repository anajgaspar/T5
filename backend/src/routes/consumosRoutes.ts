import { FastifyInstance } from "fastify";
import { 
    registrarConsumoProdutoController, 
    registrarConsumoServicoController 
} from "../controllers/consumosController.js";

async function consumosRoutes(fastify: FastifyInstance) {
  fastify.post('/produtos', registrarConsumoProdutoController);
  fastify.post('/servicos', registrarConsumoServicoController);
};

export default consumosRoutes;