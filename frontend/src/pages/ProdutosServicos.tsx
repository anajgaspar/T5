import { useState, useEffect } from "react";
import NavbarCompleta from "../components/NavbarCompleta";
import ListagemProdutos from "../components/ListagemProdutos";
import FormCadastroProduto from "../components/FormCadastroProduto";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/produtosServicos.css";
import { listarProdutos } from "../api/produtosApi";

type Produto = {
    id?: number,
    nome: string,
    valor: string
}

export default function Produtos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);   
    const [modalVisivel, setModalVisivel] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
    const [modoFormulario, setModoFormulario] = useState<"cadastrar" | "atualizar">("cadastrar");

    useEffect(() => {
        carregarProdutos();
    }, []);

    async function carregarProdutos() {
        try {
            setLoading(true);
            const dados = await listarProdutos();
            setProdutos(dados);
        } catch (error) {
            console.error("Erro ao carregar produtos:", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <p>Carregando produtos...</p>;
    }

    const abrirModalCadastro = () => {
        setModoFormulario("cadastrar");
        setProdutoSelecionado(null);
        setModalVisivel(true);
    };

    const abrirModalAtualizacao = (produto: Produto) => {
        setModoFormulario("atualizar");
        setProdutoSelecionado(produto);
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
                        <a id="link-ativo" className="nav-link active" aria-current="page" href="/produtos">Produtos</a>
                    </li>
                    <li className="nav-item">
                        <a id="link-nao-ativo" className="nav-link" aria-current="page" href="/servicos">Serviços</a>
                    </li>
                </ul>
                <div id="titulo" className="container-md d-flex justify-content-between align-items-center">
                    <h3>Produtos</h3>
                    <div>
                        <button id="botao" className="rounded rounded-full" onClick={abrirModalCadastro}>Cadastrar Produto</button>
                    </div>
                </div>
                <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                    {produtos.map((produto) => (
                        <ListagemProdutos key={produto.id} produto={produto} onAtualizar={carregarProdutos} onEditar={abrirModalAtualizacao}/>
                    ))}
                </ul>
            </div>
            {modalVisivel && (
                <div className="modal-cadastro">
                    <div className="modal-conteudo">
                        <span className="botao-fechar-modal" onClick={fecharModal}>&times;</span>
                        <h4 style={{ color: '#F39C12' }}>Cadastro de Produto</h4>
                        <FormCadastroProduto modo={modoFormulario}
                        produto={produtoSelecionado}
                        onFinalizar={() => { 
                            carregarProdutos();
                            fecharModal();
                        }}/>
                    </div>
                </div>
            )}
        </>
    );
}
