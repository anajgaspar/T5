import ListagemProdutosServicos from "../components/ListagemProdutosServicos";
import "../styles/relatorios.css";
import NavbarCompleta from "../components/NavbarCompleta";

export default function Relatorios () {
    return (
        <>
            <NavbarCompleta rota="/" />
            <div>
                <div id="titulo" className="container-md">
                    <h3>Relatórios</h3>
                </div>
                <form className="container-lg d-flex flex-column gap-2 my-4">
                    <div className="mb-3">
                        <label htmlFor="cliente-select" className="form-label">
                            Escolha um relatório:
                        </label>
                        <select id="cliente-select" className="form-select">
                            <option></option>
                            <option>
                                Listagem dos 10 clientes que mais consumiram produtos ou serviços, em
                                quantidade.
                            </option>
                            <option>
                                Listagem dos 5 clientes que mais consumiram em valor.
                            </option>
                            <option selected>
                                Listagem geral dos serviços ou produtos mais consumidos.
                            </option>
                        </select>
                    </div>
                    <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                        <ListagemProdutosServicos nome="Ração Premium Cães 10kg" valor={180} />
                        <ListagemProdutosServicos nome="Areia Higiênica 4kg" valor={35} />
                        <ListagemProdutosServicos nome="Shampoo Antipulgas" valor={45} />
                        <ListagemProdutosServicos nome="Brinquedo Mordedor" valor={25} />
                        <ListagemProdutosServicos nome="Coleira Antipulgas" valor={60} />
                    </ul>
                </form>
            </div>
        </>
    );
};
