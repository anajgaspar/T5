import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/consumo.css";
import NavbarCompleta from "../components/NavbarCompleta";
import { useState, useEffect } from "react";
import { listarClientes } from "../api/clientesApi";
import { listarProdutos } from "../api/produtosApi";
import { listarServicos } from "../api/servicosApi";
import { registrarConsumoProduto, registrarConsumoServico } from "../api/consumo";

type Cliente = {
    id?: number,
    nome: string,
    nomeSocial: string,
    cpf: string,
    rgs: string[],
    telefones: string[],
    pets: string[]
}

type Produto = {
    id?: number,
    nome: string,
    valor: string
}

type Servico = {
    id?: number,
    nome: string,
    valor: string
}

export default function Consumos() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [clienteId, setClienteId] = useState("");
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [servicos, setServicos] = useState<Servico[]>([]);
    const [produtosSelecionados, setProdutosSelecionados] = useState<string[]>([]);
    const [servicosSelecionados, setServicosSelecionados] = useState<string[]>([]);

    const handleCheck = async (setState: any, lista: string[], nome: string) => {
        setState(lista.includes(nome) 
        ? lista.filter(item => item !== nome) 
        : [...lista, nome]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!clienteId) {
            alert("Selecione um cliente!");
            return;
        }

        try {
            await Promise.all(
                produtosSelecionados.map((produtoId) =>
                    registrarConsumoProduto(Number(clienteId), Number(produtoId))
                )
            );

            await Promise.all(
                servicosSelecionados.map((servicoId) =>
                    registrarConsumoServico(Number(clienteId), Number(servicoId))
                )
            );

            alert("Consumos registrados com sucesso!");
            setProdutosSelecionados([]);
            setServicosSelecionados([]);
            setClienteId("");
        } catch (error) {
        console.error("Erro ao registrar consumo:", error);
        alert("Erro ao registrar consumo.");
        }
    };

    useEffect(() => {
        carregarDados();
    }, []);

    async function carregarDados() {
        try {
            const dadosClientes = await listarClientes();
            setClientes(dadosClientes);
            const dadosProdutos = await listarProdutos();
            setProdutos(dadosProdutos);
            const dadosServicos = await listarServicos();
            setServicos(dadosServicos);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        }
    }

    return (
        <>
            <NavbarCompleta rota="/" />
            <div className="container-lg d-flex flex-column gap-2 my-4">
                <h3 id="titulo">Cadastro de Consumo</h3>
                <form className="consumo-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="cliente-select">Cliente:</label>
                        <select id="cliente-select" className="form-select" value={clienteId} onChange={(e) => setClienteId(e.target.value)}>
                            <option value="">Selecione...</option>
                                {clientes.map((cliente) => (
                                    <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>
                                ))}
                        </select>
                    </div>
                    <div className="consumo-section">
                        <h5>Produtos</h5>
                        <div className="checkbox-list">
                            {produtos.map((produto) => (
                                <div key={produto.id} className="form-check">
                                    <input type="checkbox" className="form-check-input" id={`produto-${produto.id}`} checked={produtosSelecionados.includes(String(produto.id))} onChange={() => handleCheck(setProdutosSelecionados, produtosSelecionados, String(produto.id))}/>
                                    <label className="form-check-label">{produto.nome}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="consumo-section">
                        <h5>Serviços</h5>
                        <div className="checkbox-list">
                            {servicos.map((servico) => (  
                                <div key={servico.id} className="form-check">
                                    <input type="checkbox" className="form-check-input" id={`servico-${servico.id}`} checked={servicosSelecionados.includes(String(servico.id))} onChange={() => handleCheck(setServicosSelecionados, servicosSelecionados, String(servico.id))}/>
                                    <label className="form-check-label">{servico.nome}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button type="submit" id="btn-cadastro" className="rounded rounded-full">Cadastrar Consumo</button>
                </form>
            </div>
        </>
    );
}