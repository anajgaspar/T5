import { API_URL } from "./api";

type Telefone = {
    id: number;
    numero: string;
    clienteId: number;
};

type Cliente = {
    id: number,
    nome: string,
    nomeSocial: string,
    cpf: string,
    rgs: string[],
    telefones: Telefone[],
    pets: string[]
}

export async function registrarCliente(cliente: Cliente) {
    await fetch(`${API_URL}/clientes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente)
    })
}

export async function listarClientes() {
    const response = await fetch(`${API_URL}/clientes`)
    return await response.json()
}

export async function listarClientePeloId(id: number) {
    const response = await fetch(`${API_URL}/clientes/${id}`)
    return await response.json()
}

export async function atualizarCliente(cliente: Cliente, id: number) {
    await fetch(`${API_URL}/clientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente)
    })
}

export async function excluirCliente(id: number) {
    await fetch(`${API_URL}/clientes/${id}`, {
        method: "DELETE"
    })
}