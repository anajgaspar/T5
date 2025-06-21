import prisma from '../prisma/cliente';

export async function registrarProdutoService(dadosProduto: {
    nome: string,
    valor: string
}) {
    try {
        const novoProduto = await prisma.produto.create({
            data: {
                nome: dadosProduto.nome,
                valor: dadosProduto.valor
            }
        });
        return novoProduto;
    } catch (error) {
        console.error('Erro ao registrar produto:', error);
        throw error; 
    }
}

export async function listarProdutosService() {
    try {
        const produtos = await prisma.produto.findMany();
        return produtos;
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
        throw error; 
    }
}

export async function listarProdutoPeloIdService(id: number) {
    try {
        const produto = await prisma.produto.findUnique({
            where: { id }
        });
        return produto;
    } catch (error) {
        console.error('Erro ao listar produto:', error);
        throw error;
  }
}

export async function atualizarProdutoPeloIdService(id: number, novosDadosProduto: any) {
    try {
        const produtoAtualizado = await prisma.produto.update({
            where: { id },
            data: {
                nome: novosDadosProduto.nome,
                valor: novosDadosProduto.valor
            }
        });
        return produtoAtualizado;
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        throw error;
  }
}

export async function deletarProdutoPeloIdService(id: number) {
    try {
        await prisma.produto.delete({
            where: { id }
        });
        return { message: 'Produto deletado com sucesso!' };
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        throw error;
  }
}