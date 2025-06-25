import { useState, useEffect } from "react";
import FormCadastroServico from "../components/FormCadastroServico";
import ListagemServicos from "../components/ListagemServicos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/produtosServicos.css";
import NavbarCompleta from "../components/NavbarCompleta";
import { listarServicos } from "../api/servicosApi";

type Servico = {
    id?: number,
    nome: string,
    valor: string
}

export default function Servicos() {
    const [servicos, setServicos] = useState<Servico[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [servicoSelecionado, setServicoSelecionado] = useState<Servico | null>(null);
    const [modoFormulario, setModoFormulario] = useState<"cadastrar" | "atualizar">("cadastrar");

    useEffect(() => {
        carregarServicos();
    }, []);

    async function carregarServicos() {
        try {
            setLoading(true);
            const dados = await listarServicos();
            setServicos(dados);
        } catch (error) {
            console.error("Erro ao carregar serviços:", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <p>Carregando serviços...</p>;
    }

    const abrirModalCadastro = () => {
        setModoFormulario("cadastrar");
        setServicoSelecionado(null);
        setModalVisivel(true);
    };

    const abrirModalAtualizacao = (servico: Servico) => {
        setModoFormulario("atualizar");
        setServicoSelecionado(servico);
        setModalVisivel(true);
    }

    const fecharModal = () => {
        setModalVisivel(false);
    };

    return (
        <>
            <NavbarCompleta rota="/" />
            <div className="container-md">
                <ul className="nav nav-underline ps-1 mt-2">
                    <li className="nav-item">
                        <a id="link-nao-ativo" className="nav-link" aria-current="page" href="/produtos">Produtos</a>
                    </li>
                    <li className="nav-item">
                        <a id="link-ativo" className="nav-link active" aria-current="page" href="/servicos">Serviços</a>
                    </li>
                </ul>
                <div id="titulo" className="container-md d-flex justify-content-between align-items-center">
                    <h3>Serviços</h3>
                    <div>
                        <button id="botao" className="rounded rounded-full" onClick={abrirModalCadastro}>Cadastrar Serviço</button>
                    </div>
                </div>
                <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                    {servicos.map((servico) => (
                        <ListagemServicos key={servico.id} servico={servico} onAtualizar={carregarServicos} onEditar={abrirModalAtualizacao}/>
                    ))}
                </ul>
            </div>
            {modalVisivel && (
                <div className="modal-cadastro">
                    <div className="modal-conteudo">
                        <span className="botao-fechar-modal" onClick={fecharModal}>&times;</span>
                        <h4 style={{ color: '#F39C12' }}>Cadastro de Serviço</h4>
                        <FormCadastroServico modo={modoFormulario}
                        servico={servicoSelecionado}
                        onFinalizar={() => { 
                            carregarServicos();
                            fecharModal();
                        }}/>
                    </div>
                </div>
            )}
        </>
    );
}
