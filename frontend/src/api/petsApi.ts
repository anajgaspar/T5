import { API_URL } from "./api";

type Pet = {
    nome: string,
    tipo: string,
    raca: string,
    genero: string,
    clienteId: number
}

export async function registrarPet(pet: Pet) {
    await fetch(`${API_URL}/pets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pet)
    })
}

export async function listarPets() {
    const response = await fetch(`${API_URL}/pets`)
    return await response.json()
}

export async function listarPetPorCliente(clienteId: number) {
    const response = await fetch(`${API_URL}/clientes/${clienteId}/pets`)
    return await response.json()
}

export async function atualizarPet(pet: Pet, id: number) {
    await fetch(`${API_URL}/pets/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pet)
    })
}

export async function excluirPet(id: number) {
    await fetch(`${API_URL}/pets/${id}`, {
        method: "DELETE"
    })
}