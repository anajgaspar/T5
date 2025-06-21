import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";
import { registrarCliente, atualizarCliente } from "../api/clientesApi";

type Telefone = {
    numero: string
};

type Rg = {
  numero: string;
};

type Cliente = {
    id?: number,
    nome: string,
    nomeSocial: string,
    cpf: string,
    rgs: Rg[],
    telefones: Telefone[],
    pets: string[]
}

type Props = {
  modo: "cadastrar" | "atualizar",
  onFinalizar: () => void,
  cliente?: Cliente | null;
};

export default function FormCadastroCliente({modo, onFinalizar, cliente }: Props) {
    const [nome, setNome] = useState("");
    const [nomeSocial, setNomeSocial] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [ddd, setDdd] = useState("");
    const [numero, setNumero] = useState("");

    useEffect(() => {
        if (modo === "atualizar" && cliente) {
            setNome(cliente.nome);
            setNomeSocial(cliente.nomeSocial);
            setCpf(cliente.cpf);
            if (cliente.rgs.length > 0) {
                setRg(cliente.rgs[0].numero ?? "");
            } else {
                setRg("");
            }
            if (cliente.telefones.length > 0) {
                const telefone = cliente.telefones[0].numero;
                setDdd(telefone.substring(0, 2));
                setNumero(telefone.substring(2));
            }
        }
    }, [modo, cliente]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const clienteAtualizado: Cliente = {
            id: cliente?.id,
            nome,
            nomeSocial,
            cpf,
            rgs: rg.trim() ? [{ numero: rg.trim() }] : [],
            telefones: numero.trim() ? [{ numero: `${ddd}${numero}` }] : [],
            pets: [],
        };

        try {
            if (modo === "cadastrar") {
                await registrarCliente(clienteAtualizado);
                alert("Cliente cadastrado com sucesso!");
            } else if (modo === "atualizar" && clienteAtualizado.id) {
                await atualizarCliente(clienteAtualizado, clienteAtualizado.id);
                alert("Cliente atualizado com sucesso!");
            }
            setNome("");
            setNomeSocial("");
            setCpf("");
            setRg("");
            setDdd("");
            setNumero("");
            onFinalizar();
            } catch (error) {
            console.error(error);
            }
    }

    return (
        <form className="pt-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input type="text" className="form-control" id="nome" value={nome} onChange={e => setNome(e.target.value)}/>
            </div>
            <div className="mb-3">
                    <label htmlFor="nomeSocial" className="form-label">Nome Social:</label>
                    <input type="text" className="form-control" id="nomeSocial" value={nomeSocial} onChange={e => setNomeSocial(e.target.value)}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="cpf" className="form-label">CPF:</label>
                <input className="form-control" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)}/>
            </div>
            <div className="mb-3">
                    <label htmlFor="rg" className="form-label">RG:</label>
                    <input className="form-control" id="rg" value={rg} onChange={e => setRg(e.target.value)}/>
            </div>
            <div className="mb-3 row">
                <div className="col-md-3">
                    <label htmlFor="ddd" className="form-label">DDD:</label>
                    <input className="form-control" id="ddd" value={ddd} onChange={e => setDdd(e.target.value)}/>
                </div>

                <div className="col-md">
                    <label htmlFor="numero" className="form-label">Número:</label>
                    <input className="form-control" id="numero" value={numero} onChange={e => setNumero(e.target.value)}/>
                </div>
            </div>
            <button id="botao" className="rounded rounded-full" type="submit">
                {modo === "cadastrar" ? "Cadastrar" : "Atualizar"}
            </button>
        </form>
    );
}
