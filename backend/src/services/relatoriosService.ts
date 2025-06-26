import prisma from '../prisma/cliente';

export async function listarClientesQuantidadeService() {
    const produtos = await prisma.consumoProduto.groupBy({
        by: ['clienteId'],
        _sum: { quantidade: true },
    });

    const servicos = await prisma.consumoServico.groupBy({
        by: ['clienteId'],
        _sum: { quantidade: true },
    });

    const totais: { [key: number]: number } = {};

    produtos.forEach(p => {
        const id = p.clienteId;
        const quantidade = p._sum.quantidade || 0;
        totais[id] = (totais[id] || 0) + quantidade;
    });

    servicos.forEach(s => {
        const id = s.clienteId;
        const quantidade = s._sum.quantidade || 0;
        totais[id] = (totais[id] || 0) + quantidade;
    });

    const ordenados = Object.entries(totais)
        .sort(([_, a], [__, b]) => b - a)
        .slice(0, 10);

    const resultado = await Promise.all(
        ordenados.map(async ([id, quantidade]) => {
            const cliente = await prisma.cliente.findUnique({ where: { id: Number(id) } });
            return { nome: cliente?.nome || "Desconhecido", quantidade };
        })
    );

    return resultado;
}

export async function listarClientesValorService() {
    const produtos = await prisma.consumoProduto.findMany({
        include: { produto: true }
    });

    const servicos = await prisma.consumoServico.findMany({
        include: { servico: true }
    });

    const totais: Record<number, number> = {};

    produtos.forEach(cp => {
        const total = Number(cp.quantidade) * Number(cp.produto.valor);
        totais[cp.clienteId] = (totais[cp.clienteId] || 0) + total;
    });

    servicos.forEach(cs => {
        const total = Number(cs.quantidade) * Number(cs.servico.valor);
        totais[cs.clienteId] = (totais[cs.clienteId] || 0) + total;
    });

    const ordenados = Object.entries(totais)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5);

    const resultado = await Promise.all(
        ordenados.map(async ([id, valor]) => {
            const cliente = await prisma.cliente.findUnique({ where: { id: Number(id) } });
            return { nome: cliente?.nome || "Desconhecido", valor: valor.toFixed(2) };
        })
    );

    return resultado;
};

export async function listarMaisConsumidosService() {
    const produtos = await prisma.consumoProduto.groupBy({
        by: ['produtoId'],
        _sum: { quantidade: true },
        orderBy: { _sum: { quantidade: 'desc' } }
    });

    const servicos = await prisma.consumoServico.groupBy({
        by: ['servicoId'],
        _sum: { quantidade: true },
        orderBy: { _sum: { quantidade: 'desc' } }
    });

    const produtosDetalhados = await Promise.all(produtos.map(async (p) => {
        const prod = await prisma.produto.findUnique({ where: { id: p.produtoId } });
        return { nome: prod?.nome, quantidade: p._sum.quantidade };
    }));

    const servicosDetalhados = await Promise.all(servicos.map(async (s) => {
        const serv = await prisma.servico.findUnique({ where: { id: s.servicoId } });
        return { nome: serv?.nome, quantidade: s._sum.quantidade };
    }));

    return [...produtosDetalhados, ...servicosDetalhados];
}

export async function listarMaisConsumidosPorTipoRacaService() {
    const clientes = await prisma.cliente.findMany({
        include: {
            pets: true,
            consumoProdutos: {
                include: { produto: true }
            },
            consumoServicos: {
                include: { servico: true }
            }
        }
    });

    const resultados: Record<string, { nome: string, quantidade: number }> = {};

    for (const cliente of clientes) {
        for (const pet of cliente.pets) {
            const chave = `${pet.tipo} - ${pet.raca}`;

            for (const cp of cliente.consumoProdutos) {
                const key = `${chave} - Produto: ${cp.produto.nome}`;
                resultados[key] = (resultados[key] || { nome: cp.produto.nome, quantidade: 0 });
                resultados[key].quantidade += cp.quantidade;
            }

            for (const cs of cliente.consumoServicos) {
                const key = `${chave} - Serviço: ${cs.servico.nome}`;
                resultados[key] = (resultados[key] || { nome: cs.servico.nome, quantidade: 0 });
                resultados[key].quantidade += cs.quantidade;
            }
        }
    }

    const agrupado: Record<string, { tipo: string, raca: string, itens: { nome: string, quantidade: number }[] }> = {};

    Object.entries(resultados).forEach(([chave, { nome, quantidade }]) => {
        const partes = chave.split(' - ');
        const tipo = partes[0];
        const raca = partes[1];
        const label = partes.slice(2).join(' - ').trim();

        const grupo = `${tipo} - ${raca}`;
        if (!agrupado[grupo]) {
            agrupado[grupo] = { tipo, raca, itens: [] };
        }

        agrupado[grupo].itens.push({ nome: label, quantidade });
    });

    Object.values(agrupado).forEach(grupo => {
        grupo.itens.sort((a, b) => b.quantidade - a.quantidade);
        grupo.itens = grupo.itens.slice(0, 3);
    });

    return agrupado;
}
