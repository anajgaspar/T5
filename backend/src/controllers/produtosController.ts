import { FastifyRequest, FastifyReply } from "fastify";
import { 
    registrarProdutoService, 
    listarProdutosService, 
    listarProdutoPeloIdService, 
    atualizarProdutoPeloIdService, 
    deletarProdutoPeloIdService 
} from "../services/produtosService.js";

interface ParamsType {
  id: string;
}

export async function registrarProdutoController(req: FastifyRequest, reply: FastifyReply) {
    try {
        const dadosProduto = req.body as {
            nome: string,
            valor: string
        }
        const produto = await registrarProdutoService(dadosProduto);
        reply.code(201).send(produto);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao registrar produto' });
    }
}

export async function listarProdutosController(req: FastifyRequest, reply: FastifyReply) {
    try {
        const produtos = await listarProdutosService();
        reply.send(produtos);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao listar produtos' });
    }
}

export async function listarProdutoPeloIdController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
    try {
        const id = Number(req.params.id);
        const produto = await listarProdutoPeloIdService(id);

        if (!produto) {
            return reply.code(404).send({ error: 'Produto não encontrado' });
        }

        reply.send(produto);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao listar produto' });
    }
}

export async function atualizarProdutoPeloIdController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
    try {
        const id = Number(req.params.id);
        const dadosAtualizados = req.body;

        const produto = await atualizarProdutoPeloIdService(id, dadosAtualizados);

        reply.send(produto);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        reply.code(500).send({ error: 'Erro ao atualizar produto' });
  }
}

export async function deletarProdutoPeloIdController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
    try {
        const id = Number(req.params.id);

        const resultado = await deletarProdutoPeloIdService(id);

        reply.send(resultado);
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        reply.code(500).send({ error: 'Erro ao deletar produto' });
    }
}