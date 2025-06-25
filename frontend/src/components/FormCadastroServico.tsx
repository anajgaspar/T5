import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";
import { registrarServico, atualizarServico } from '../api/servicosApi.js';

type Servico = {
    id?: number,
    nome: string,
    valor: string
}

type Props = {
  modo: "cadastrar" | "atualizar",
  onFinalizar: () => void,
  servico?:Servico | null;
};

export default function FormCadastroServico({ modo, onFinalizar, servico }: Props) {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");

    useEffect(() => {
        if (modo === "atualizar" && servico) {
            setNome(servico.nome);
            setValor(servico.valor);
        }
    }, [modo, servico]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const servicoAtualizado: Servico = {
            id: servico?.id,
            nome,
            valor
        };

        try {
            if (modo === "cadastrar") {
                await registrarServico(servicoAtualizado);
                alert("Serviço cadastrado com sucesso!");
            } else if (modo === "atualizar" && servicoAtualizado.id) {
                await atualizarServico(servicoAtualizado, servicoAtualizado.id);
                alert("Serviço atualizado com sucesso!");
            }
            setNome("");
            setValor("");
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
                <label htmlFor="valor" className="form-label">Valor(R$):</label>
                <input type="number" className="form-control" id="valor" value={valor} onChange={e => setValor(e.target.value)}/>
            </div>
            <button id="botao" className="rounded rounded-full" type="submit">
                {modo === "cadastrar" ? "Cadastrar" : "Atualizar"}
            </button>
        </form>
    );
}
