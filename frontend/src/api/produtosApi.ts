import { API_URL } from "./api";

type Produto = {
    nome: string,
    valor: string
}

export async function registrarProduto(produto: Produto) {
    await fetch(`${API_URL}/produtos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
    })
}

export async function listarProdutos() {
    const response = await fetch(`${API_URL}/produtos`)
    return await response.json()
}

export async function listarProdutoPeloId(id: number) {
    const response = await fetch(`${API_URL}/produtos/${id}`)
    return await response.json()
}

export async function atualizarProduto(produto: Produto, id: number) {
    await fetch(`${API_URL}/produtos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
    })
}

export async function excluirProduto(id: number) {
    await fetch(`${API_URL}/produtos/${id}`, {
        method: "DELETE"
    })
}