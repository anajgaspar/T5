import { API_URL } from "./api";

type Servico = {
    nome: string,
    valor: string
}

export async function registrarServico(servico: Servico) {
    await fetch(`${API_URL}/servicos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(servico)
    })
}

export async function listarServicos() {
    const response = await fetch(`${API_URL}/servicos`)
    return await response.json()
}

export async function listarServicoPeloId(id: number) {
    const response = await fetch(`${API_URL}/servicos/${id}`)
    return await response.json()
}

export async function atualizarServico(servico: Servico, id: number) {
    await fetch(`${API_URL}/servicos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(servico)
    })
}

export async function excluirServico(id: number) {
    await fetch(`${API_URL}/servicos/${id}`, {
        method: "DELETE"
    })
}