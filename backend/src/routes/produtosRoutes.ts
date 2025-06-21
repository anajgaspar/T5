import { FastifyInstance } from "fastify";
import { 
    registrarProdutoController, 
    listarProdutosController, 
    listarProdutoPeloIdController, 
    atualizarProdutoPeloIdController, 
    deletarProdutoPeloIdController 
} from "../controllers/produtosController.js";

async function produtosRoutes(fastify: FastifyInstance) {
  fastify.post('/', registrarProdutoController);
  fastify.get('/', listarProdutosController);
  fastify.get('/:id', listarProdutoPeloIdController);
  fastify.put('/:id', atualizarProdutoPeloIdController);
  fastify.delete('/:id', deletarProdutoPeloIdController);
};

export default produtosRoutes;