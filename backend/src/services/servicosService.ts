import prisma from '../prisma/cliente';

export async function registrarServicoService(dadosServico: {
    nome: string,
    valor: string
}) {
    try {
        const novoServico = await prisma.servico.create({
            data: {
                nome: dadosServico.nome,
                valor: dadosServico.valor
            }
        });
        return novoServico;
    } catch (error) {
        console.error('Erro ao registrar serviço:', error);
        throw error;
    }
}

export async function listarServicosService() {
    try {
        const servicos = await prisma.servico.findMany();
        return servicos;
    } catch (error) {
        console.error('Erro ao listar serviços:', error);
        throw error;
    }
}

export async function listarServicoPeloIdService(id: number) {
    try {
        const servico = await prisma.servico.findUnique({
            where: { id }
        });
        return servico;
    } catch (error) {
        console.error('Erro ao listar serviço:', error);
        throw error;
    }
}

export async function atualizarServicoPeloIdService(id: number, novosDadosServico: any) {
    try {
        const servicoAtualizado = await prisma.servico.update({
            where: { id },
            data: {
                nome: novosDadosServico.nome,
                valor: novosDadosServico.valor
            }
        });
        return servicoAtualizado;
    } catch (error) {
        console.error('Erro ao atualizar serviço:', error);
        throw error;
    }
}

export async function deletarServicoPeloIdService(id: number) {
    try {
        await prisma.servico.delete({
            where: { id }
        });
        return { message: 'Serviço deletado com sucesso!' };
    } catch (error) {
        console.error('Erro ao deletar serviço:', error);
        throw error;
    }
}
