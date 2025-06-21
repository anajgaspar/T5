import { useState, useEffect } from "react";
import NavbarCompleta from "../components/NavbarCompleta";
import ListagemClientes from "../components/ListagemClientes";
import FormCadastroCliente from "../components/FormCadastroCliente";
import "../styles/clientes.css";
import { listarClientes } from "../api/clientesApi";

type Telefone = {
    id: number,
    numero: string,
    clienteId: number
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

export default function Clientes() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);
    const [modoFormulario, setModoFormulario] = useState<"cadastrar" | "atualizar">("cadastrar");

    useEffect(() => {
        carregarClientes();
    }, []);

    async function carregarClientes() {
        try {
            setLoading(true);
            const dados = await listarClientes();
            setClientes(dados);
        } catch (error) {
            console.error("Erro ao carregar clientes:", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <p>Carregando clientes...</p>;
    }

    const abrirModalCadastro = () => {
        setModoFormulario("cadastrar");
        setClienteSelecionado(null);
        setModalVisivel(true);
    };

    const abrirModalAtualizacao = (cliente: Cliente) => {
        setModoFormulario("atualizar");
        setClienteSelecionado(cliente);
        setModalVisivel(true);
    };

    const fecharModal = () => {
        setModalVisivel(false);
    };

    return (
        <>
            <NavbarCompleta rota="/" />
            <div id="titulo" className="container-md d-flex justify-content-between align-items-center">
                <h3>Clientes</h3>
                <div>
                    <button id="botao" className="rounded rounded-full" onClick={abrirModalCadastro}>Cadastrar Cliente</button>
                </div>
            </div>
            <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                {clientes.map((cliente) => (
                    <ListagemClientes key={cliente.id} cliente={cliente} onAtualizar={carregarClientes} onEditar={abrirModalAtualizacao}/>
                ))}
            </ul>
            {modalVisivel && (
                <div className="modal-cadastro">
                    <div className="modal-conteudo">
                        <span className="botao-fechar-modal" onClick={fecharModal}>&times;</span>
                        <h4 style={{ color: '#F39C12' }}>Cadastro de Cliente</h4>
                        <FormCadastroCliente modo={modoFormulario}
                        cliente={clienteSelecionado}
                        onFinalizar={() => { 
                            carregarClientes();
                            fecharModal();
                        }}/>
                    </div>
                </div>
            )}
        </>
    );
}
