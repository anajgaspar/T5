import { FastifyRequest, FastifyReply } from "fastify";
import {
    registrarServicoService,
    listarServicosService,
    listarServicoPeloIdService,
    atualizarServicoPeloIdService,
    deletarServicoPeloIdService
} from "../services/servicosService.js";

interface ParamsType {
  id: string;
}

export async function registrarServicoController(req: FastifyRequest, reply: FastifyReply) {
    try {
        const dadosServico = req.body as {
            nome: string,
            valor: string
        }
        const servico = await registrarServicoService(dadosServico);
        reply.code(201).send(servico);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao registrar serviço' });
    }
}

export async function listarServicosController(req: FastifyRequest, reply: FastifyReply) {
    try {
        const servicos = await listarServicosService();
        reply.send(servicos);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao listar serviços' });
    }
}

export async function listarServicoPeloIdController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
    try {
        const id = Number(req.params.id);
        const servico = await listarServicoPeloIdService(Number(id));

        if (!servico) {
            return reply.code(404).send({ error: 'Serviço não encontrado' });
        }

        reply.send(servico);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao listar serviço' });
    }
}

export async function atualizarServicoPeloIdController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
    try {
        const id = Number(req.params.id);
        const dadosAtualizados = req.body;

        const servico = await atualizarServicoPeloIdService(id, dadosAtualizados);

        reply.send(servico);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        reply.code(500).send({ error: 'Erro ao atualizar serviço' });
    }
}

export async function deletarServicoPeloIdController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
    try {
        const id = Number(req.params.id);

        const resultado = await deletarServicoPeloIdService(id);

        reply.send(resultado);
    } catch (error) {
        console.error('Erro ao deletar serviço:', error);
        reply.code(500).send({ error: 'Erro ao deletar serviço' });
    }
}
