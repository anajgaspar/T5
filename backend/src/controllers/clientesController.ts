import { FastifyRequest, FastifyReply } from "fastify";
import { registrarClienteService } from "../services/clientesService.js";
import { listarClientesService, listarClientePeloIdService } from "../services/clientesService.js";
import { atualizarClientePeloIdService } from "../services/clientesService.js";
import { deletarClientePeloIdService } from "../services/clientesService.js";

interface ParamsType {
  id: string;
}

export async function registrarClienteController(req: FastifyRequest, reply: FastifyReply) {
  try {
    const dadosCliente = req.body as {
        nome: string,
        nomeSocial: string,
        cpf: string,
        rgs: [],
        telefones: [],
        pets: []
    }
    const cliente = await registrarClienteService(dadosCliente);
    reply.code(201).send(cliente);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao registrar cliente' });
  }
}

export async function listarClientesController(req: FastifyRequest, reply: FastifyReply) {
  try {
    const clientes = await listarClientesService();
    reply.send(clientes);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao listar clientes' });
  }
}

export async function listarClientePeloIdController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
  try {
    const id = Number(req.params.id);
    const cliente = await listarClientePeloIdService(id);

    if (!cliente) {
      return reply.code(404).send({ error: 'Cliente não encontrado' });
    }

    reply.send(cliente);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao listar cliente' });
  }
}

export async function atualizarClientePeloIdController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
  try {
    const id = Number(req.params.id);
    const dadosAtualizados = req.body;

    const cliente = await atualizarClientePeloIdService(id, dadosAtualizados);

    reply.send(cliente);
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    reply.code(500).send({ error: 'Erro ao atualizar cliente' });
  }
}

export async function deletarClientePeloIdController(req: FastifyRequest<{ Params: ParamsType }>, reply: FastifyReply) {
  try {
    const id = Number(req.params.id);

    const resultado = await deletarClientePeloIdService(id);

    reply.send(resultado);
  } catch (error) {
    console.error('Erro ao deletar cliente:', error);
    reply.code(500).send({ error: 'Erro ao deletar cliente' });
  }
}
