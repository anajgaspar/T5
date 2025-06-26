import { API_URL } from "./api";

export async function registrarConsumoProduto(clienteId: number, produtoId: number) {
    await fetch(`${API_URL}/consumos/produtos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            clienteId,
            produtoId,
            quantidade: 1,
            data: new Date().toISOString()
        })
    })
}

export async function registrarConsumoServico(clienteId: number, servicoId: number) {
    await fetch(`${API_URL}/consumos/servicos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            clienteId,
            servicoId,
            quantidade: 1,
            data: new Date().toISOString()
        })
    })
}