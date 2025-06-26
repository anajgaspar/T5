import prisma from '../prisma/cliente';

export async function registrarConsumoProdutoService(dadosProduto: {
    clienteId: number,
    produtoId: number,
    quantidade: number,
    data: string
}) {
    try {
        const novoConsumoProduto = await prisma.consumoProduto.create({
            data: {
                clienteId: dadosProduto.clienteId,
                produtoId: dadosProduto.produtoId,
                quantidade: dadosProduto.quantidade,
                data: dadosProduto.data
            }
        });
        return novoConsumoProduto;
    } catch (error) {
        console.error('Erro ao registrar consumo:', error);
        throw error; 
    }
}

export async function registrarConsumoServicoService(dadosServico: {
    clienteId: number,
    servicoId: number,
    quantidade: number,
    data: string
}) {
    try {
        const novoConsumoServico = await prisma.consumoServico.create({
            data: {
                clienteId: dadosServico.clienteId,
                servicoId: dadosServico.servicoId,
                quantidade: dadosServico.quantidade,
                data: dadosServico.data
            }
        });
        return novoConsumoServico;
    } catch (error) {
        console.error('Erro ao registrar consumo:', error);
        throw error; 
    }
}