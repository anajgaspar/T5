import { useState } from "react";
import NavbarCompleta from "../components/NavbarCompleta";
import ListagemProdutosServicos from "../components/ListagemProdutosServicos";
import FormCadastroProdutoServico from "../components/FormCadastroProdutoServico";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/produtosServicos.css";

export default function Produtos() {
    const [modalVisivel, setModalVisivel] = useState(false);

    const abrirModal = () => {
        setModalVisivel(true);
    };

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
                        <button id="botao" className="rounded rounded-full" onClick={abrirModal}>Cadastrar Produto</button>
                    </div>
                </div>
                <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                    <ListagemProdutosServicos nome="Ração Premium Cães 10kg" valor={180} />
                    <ListagemProdutosServicos nome="Areia Higiênica 4kg" valor={35} />
                    <ListagemProdutosServicos nome="Shampoo Antipulgas" valor={45} />
                    <ListagemProdutosServicos nome="Brinquedo Mordedor" valor={25} />
                    <ListagemProdutosServicos nome="Coleira Antipulgas" valor={60} />
                    <ListagemProdutosServicos nome="Caminha Pequena" valor={120} />
                    <ListagemProdutosServicos nome="Arranhador para Gatos" valor={95} />
                    <ListagemProdutosServicos nome="Comedouro Duplo Inox" valor={50} />
                    <ListagemProdutosServicos nome="Caixa de Transporte Média" valor={140} />
                    <ListagemProdutosServicos nome="Petisco Natural 300g" valor={32} />
                </ul>
            </div>
            {modalVisivel && (
                <div className="modal-cadastro">
                    <div className="modal-conteudo">
                        <span className="botao-fechar-modal" onClick={fecharModal}>&times;</span>
                        <h4 style={{ color: '#F39C12' }}>Cadastro de Produto</h4>
                        <FormCadastroProdutoServico />
                    </div>
                </div>
            )}
        </>
    );
}
