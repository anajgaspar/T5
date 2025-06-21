import NavbarCompleta from "../components/NavbarCompleta";
import FormCadastroPet from "../components/FormCadastroPet";
import ListagemPets from "../components/ListagemPets";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/perfilCliente.css";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { listarClientePeloId } from "../api/clientesApi";

type Telefone = {
    id: number,
    numero: string,
    clienteId: number
};


type Pet = {
    id?: number,
    nome: string,
    tipo: string,
    raca: string,
    genero: string,
    clienteId: number
}

type Rg = {
    numero: string
}

type Cliente = {
    id?: number,
    nome: string,
    nomeSocial: string,
    cpf: string,
    rgs: Rg[],
    telefones: Telefone[],
    pets: Pet[]
}

export default function PerfilCliente() {
    const { id } = useParams<{ id: string }>();
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [petSelecionado, setPetSelecionado] = useState<Pet | null>(null);
    const [modoFormulario, setModoFormulario] = useState<"cadastrar" | "atualizar">("cadastrar");

    const carregarCliente = async () => {
        try {
            const dados = await listarClientePeloId(Number(id));
            setCliente(dados);
        } catch (error) {
            console.error("Erro ao carregar cliente:", error);
        }
    };

    useEffect(() => {
        carregarCliente();
    }, [id]);

    if (!cliente) {
        return <p>Carregando dados do cliente...</p>;
    }
    
    const abrirModalCadastro = () => {
        setModoFormulario("cadastrar");
        setPetSelecionado(null);
        setModalVisivel(true);
    };

    const abrirModalAtualizacao = (pet: Pet) => {
        setModoFormulario("atualizar");
        setPetSelecionado(pet);
        setModalVisivel(true);
    };

    const fecharModal = () => {
        setModalVisivel(false);
        carregarCliente();
    }

    return (
        <>
            <NavbarCompleta rota="/clientes"></NavbarCompleta>
            <div className="container-lg py-5">
                <div className="d-flex flex-column justify-content-center">
                    <div className="mb-4">
                        <div className="card card-body">
                            <h4 id="enfase" className="card-title">Nome: {cliente.nome}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Nome Social: {cliente.nomeSocial}</h6>
                            <p className="mb-1"><strong>CPF: </strong>{cliente.cpf}</p>
                            <p className="mb-3"><strong>RG: </strong>
                                {cliente.rgs.map((rg) => (
                                    <span key={rg.numero}>{rg.numero}</span>
                                ))}
                            </p>
                            <h6 id="enfase" className="mt-3">Telefones:</h6>
                            <ul className="list-group list-group-flush mb-3">
                                {cliente.telefones.map((telefone) => (
                                    <li key={telefone.id} className="list-group-item">{telefone.numero}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="container-md d-flex justify-content-end align-items-center pb-4">
                        <button id="botao" className="rounded rounded-full" onClick={abrirModalCadastro}>Cadastrar Pet</button>
                    </div>
                    {modalVisivel && (
                        <div className="modal-cadastro">
                            <div className="modal-conteudo">
                                <span className="botao-fechar-modal" onClick={fecharModal}>&times;</span>
                                <h4 style={{ color: '#F39C12' }}>Cadastro de Pet</h4>
                                <FormCadastroPet modo={modoFormulario}
                                pet={petSelecionado}
                                onFinalizar={() => { 
                                    carregarCliente();
                                    fecharModal();
                                }}/>
                            </div>
                        </div>
                    )}
                    <div className="mb-4">
                        <div className="card card-body p-4">
                            <h4 id="enfase" className="card-title">Pets:</h4>
                            <ul className="list-group list-group-flush mb-3">
                                {cliente.pets.length > 0 ? (
                                    cliente.pets.map((pet, id) => (
                                        <ListagemPets key={id} pet={pet} onAtualizar={carregarCliente} onEditar={abrirModalAtualizacao}/>
                                    ))
                                    ) : (
                                    <li className="list-group-item">Nenhum pet cadastrado.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
