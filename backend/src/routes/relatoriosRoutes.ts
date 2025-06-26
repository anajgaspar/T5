import { FastifyInstance } from "fastify";
import { 
    listarClientesQuantidadeController, 
    listarClientesValorController,
    listarMaisConsumidosPorTipoRacaController,
    listarMaisConsumidosController
} from "../controllers/relatoriosController.js";

async function relatoriosRoutes(fastify: FastifyInstance) {
    fastify.get("/top-clientes-quantidade", listarClientesQuantidadeController);
    fastify.get("/top-clientes-valor", listarClientesValorController);
    fastify.get("/mais-consumidos-tipo-raca", listarMaisConsumidosPorTipoRacaController);
    fastify.get("/mais-consumidos", listarMaisConsumidosController);
};

export default relatoriosRoutes;