import prisma from '../prisma/cliente';

export async function registrarPetService(dadosPet: {
    nome: string,
    tipo: string,
    raca: string,
    genero: string,
    clienteId: number;
}) {
    try {
        const novoPet = await prisma.pet.create({
            data: {
                nome: dadosPet.nome,
                tipo: dadosPet.tipo,
                raca: dadosPet.raca,
                genero: dadosPet.genero,
                clienteId: dadosPet.clienteId,
            }
        });
        return novoPet;
    } catch (error) {
    console.error('Erro ao registrar pet:', error);
    throw error;
  }
}

export async function listarTodosPetsService() {
    try {
        const pets = await prisma.pet.findMany({
            include: {
                cliente: true
            }
        })
        return pets;
    } catch (error) {
        console.error('Erro ao listar pets:', error);
        throw error;
    }
}

export async function listarPetsPorClienteService(id: number) {
    try {
        const pet = await prisma.pet.findUnique({
            where: { id }
        });
        return pet;
    } catch (error) {
    console.error('Erro ao listar pet:', error);
    throw error;
  }
}

export async function atualizarPetService(id: number, novosDadosPet: any) {
    try {
        const petAtualizado = await prisma.pet.update({
            where: { id },
            data: {
                nome: novosDadosPet.nome,
                tipo: novosDadosPet.tipo,
                raca: novosDadosPet.raca,
                genero: novosDadosPet.genero
            }
        });
        return petAtualizado;
    } catch (error) {
    console.error('Erro ao atualizar pet:', error);
    throw error;
  }
}

export async function deletarPetService(id: number) {
    try {
        await prisma.pet.delete({
            where: { id }
        });
        return { message: 'Pet deletado com sucesso!' };
    } catch (error) {
    console.error('Erro ao deletar pet:', error);
    throw error;
  }
}