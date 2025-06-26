import { FastifyRequest, FastifyReply } from "fastify";
import { 
    registrarConsumoProdutoService, 
    registrarConsumoServicoService 
} from "../services/consumosService.js";

export async function registrarConsumoProdutoController(req: FastifyRequest, reply: FastifyReply) {
    try {
        const dadosProduto = req.body as {
            clienteId: number,
            produtoId: number,
            quantidade: number,
            data: string
        }
        const produto = await registrarConsumoProdutoService(dadosProduto);
        reply.code(201).send(produto);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao registrar consumo' });
    }
}

export async function registrarConsumoServicoController(req: FastifyRequest, reply: FastifyReply) {
    try {
        const dadosServico = req.body as {
            clienteId: number,
            servicoId: number,
            quantidade: number,
            data: string
        }
        const servico = await registrarConsumoServicoService(dadosServico);
        reply.code(201).send(servico);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao registrar consumo' });
    }
}