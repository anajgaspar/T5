import { FastifyRequest, FastifyReply } from "fastify";
import {
    listarClientesQuantidadeService,
    listarClientesValorService,
    listarMaisConsumidosService,
    listarMaisConsumidosPorTipoRacaService
} from "../services/relatoriosService.js";

export async function listarClientesQuantidadeController(req: FastifyRequest, res: FastifyReply) {
    try {
        const dados = await listarClientesQuantidadeService();
        res.send(dados);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Erro ao buscar relatório por quantidade." });
    }
}

export async function listarClientesValorController(req: FastifyRequest, res: FastifyReply) {
    try {
        const dados = await listarClientesValorService();
        res.send(dados);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Erro ao buscar relatório por valor." });
    }
}

export async function listarMaisConsumidosController(req: FastifyRequest, res: FastifyReply) {
    try {
        const dados = await listarMaisConsumidosService();
        res.send(dados);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Erro ao buscar produtos/serviços mais consumidos." });
    }
}

export async function listarMaisConsumidosPorTipoRacaController(req: FastifyRequest, res: FastifyReply) {
    try {
        const dados = await listarMaisConsumidosPorTipoRacaService();
        res.send(dados);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Erro ao buscar relatório por tipo e raça de pets." });
    }
}