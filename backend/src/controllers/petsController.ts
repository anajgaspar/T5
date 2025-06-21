import { FastifyRequest, FastifyReply } from "fastify";
import { 
    registrarPetService, 
    listarTodosPetsService,
    listarPetPorIdService,
    listarPetsPorClienteService, 
    atualizarPetService, 
    deletarPetService 
} from "../services/petsService.js";

interface ParamsType {
  id: string;
}

export async function registrarPetController(req: FastifyRequest, reply: FastifyReply) {
    try {
        const dadosPet = req.body as {
            nome: string,
            tipo: string,
            raca: string,
            genero: string,
            clienteId: number;
        }
        const pet = await registrarPetService(dadosPet);
        reply.code(201).send(pet);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao registrar pet' });
    }
}

export async function listarTodosPetsController(req: FastifyRequest, reply: FastifyReply) {
    try {
        const pets = await listarTodosPetsService();
        reply.send(pets);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao listar pets' });
    }
}

export async function listarPetPorIdController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
    try {
        const id = Number(req.params.id);
        const pet = await listarPetPorIdService(id);

        if (!pet) {
            return reply.code(404).send({ error: 'Pet não encontrado' });
        }

        reply.send(pet);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao buscar pet' });
    }
}

export async function listarPetsPorClienteController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
    try {
        const clienteId = Number(req.params.id);
        const pets = await listarPetsPorClienteService(clienteId);

        if (pets.length === 0) {
            return reply.code(404).send({ error: 'Nenhum pet encontrado para este cliente' });
        }

        reply.send(pets);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao listar pets por cliente' });
    }
}

export async function atualizarPetController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
    try {
        const id = Number(req.params.id);
        const dadosAtualizados = req.body;

        const pet = await atualizarPetService(id, dadosAtualizados);

        reply.send(pet);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao atualizar pet' });
  }
}

export async function deletarPetController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
    try {
        const id = Number(req.params.id);

        const resultado = await deletarPetService(id);

        reply.send(resultado);
    } catch (error) {
        reply.code(500).send({ error: 'Erro ao deletar pet' });
  }
}