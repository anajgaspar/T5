import prisma from '../prisma/cliente';

export async function registrarClienteService(dadosCliente: {
  nome: string,
  nomeSocial: string,
  cpf: string,
  rgs: [],
  telefones: [],
  pets: []
}) {
  try {
    const novoCliente = await prisma.cliente.create({
      data: {
        nome: dadosCliente.nome,
        nomeSocial: dadosCliente.nomeSocial,
        cpf: dadosCliente.cpf,
        rgs: {
          create: dadosCliente.rgs.map((rg: any) => ({
            numero: rg.numero
          }))
        },
        telefones: {
          create: dadosCliente.telefones.map((tel: any) => ({
            numero: tel.numero
          }))
        },
        pets: {
          create: dadosCliente.pets.map((pet: any) => ({
            nome: pet.nome,
            tipo: pet.tipo,
            raca: pet.raca,
            genero: pet.genero
          }))
        }
      },
      include: {
        rgs: true,
        telefones: true,
        pets: true
      }
    });
    return novoCliente;
  } catch (error) {
    console.error('Erro ao registrar cliente:', error);
    throw error;
  }
}

export async function listarClientesService() {
  try {
    const clientes = await prisma.cliente.findMany({
      include: {
        rgs: true,
        telefones: true,
        pets: true,
        consumoProdutos: true,
        consumoServicos: true
      }
    });
    return clientes;
  } catch (error) {
    console.error('Erro ao listar clientes:', error);
    throw error;
  }
}

export async function listarClientePeloIdService(id: number) {
  try {
    const cliente = await prisma.cliente.findUnique({
    where: { id },
    include: {
      rgs: true,
      telefones: true,
      pets: true,
      consumoProdutos: true,
      consumoServicos: true
    }
  });
  return cliente;
  } catch (error) {
    console.error('Erro ao listar cliente:', error);
    throw error;
  }
}

export async function atualizarClientePeloIdService(id: number, novosDadosCliente: any) {
  try {
    const clienteAtualizado = await prisma.cliente.update({
      where: { id },
      data: {
        nome: novosDadosCliente.nome,
        nomeSocial: novosDadosCliente.nomeSocial,
        cpf: novosDadosCliente.cpf
      }
    });

    return clienteAtualizado;
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    throw error;
  }
}

export async function deletarClientePeloIdService(id: number) {
  try {
    await prisma.cliente.delete({
      where: { id }
    });
    return { message: 'Cliente deletado com sucesso!' };
  } catch (error) {
    console.error('Erro ao deletar cliente:', error);
    throw error;
  }
}