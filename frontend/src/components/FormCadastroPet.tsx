import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { atualizarPet, registrarPet } from "../api/petsApi";

type Pet = {
    id?: number,
    nome: string,
    tipo: string,
    raca: string,
    genero: string,
    clienteId: number
}

type Props = {
  modo: "cadastrar" | "atualizar",
  onFinalizar: () => void,
  pet?: Pet | null;
};

export default function FormCadastroPet({ modo, onFinalizar, pet }: Props) {
    const { id } = useParams<{ id: string }>();
    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");
    const [tipo, setTipo] = useState("");
    const [genero, setGenero] = useState("");

    useEffect(() => {
        if (modo === "atualizar" && pet) {
            setNome(pet.nome);
            setRaca(pet.raca);
            setTipo(pet.tipo);
            setGenero(pet.genero);
        }
    }, [modo, pet]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const petAtualizado: Pet = {
            id: pet?.id,
            nome,
            tipo,
            raca,
            genero,
            clienteId: Number(id)
        };

        try {
            if (modo === "cadastrar") {
                await registrarPet(petAtualizado);
                alert("Pet cadastrado com sucesso!");
            } else if (modo === "atualizar" && petAtualizado.id) {
                await atualizarPet(petAtualizado, petAtualizado.id);
                alert("Pet atualizado com sucesso!");
            }
            setNome("");
            setTipo("");
            setRaca("");
            setGenero("");
            onFinalizar();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input type="text" className="form-control" id="nome" value={nome} onChange={e => setNome(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="raca" className="form-label">Raça:</label>
                <input type="text" className="form-control" id="raca" value={raca} onChange={e => setRaca(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="genero" className="form-label">Gênero:</label>
                <input type="text" className="form-control" id="genero" value={genero} onChange={e => setGenero(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo:</label>
                <input type="text" className="form-control" id="tipo" value={tipo} onChange={e => setTipo(e.target.value)}/>
            </div>
            <button id="botao" className="rounded rounded-full" type="submit">
                {modo === "cadastrar" ? "Cadastrar" : "Atualizar"}
            </button>
        </form>
    );
}
