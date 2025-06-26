import ListagemRelatorios from "../components/ListagemRelatorios";
import { useState } from "react";
import "../styles/relatorios.css";
import NavbarCompleta from "../components/NavbarCompleta";

export default function Relatorios () {
    const [tipoRelatorio, setTipoRelatorio] = useState("");
    const [resultados, setResultados] = useState<any[]>([]);

    async function buscarRelatorio(tipo: string) {
        let endpoint = "";

        switch (tipo) {
            case "quantidade":
                endpoint = "/relatorios/top-clientes-quantidade";
                break;
            case "valor":
                endpoint = "/relatorios/top-clientes-valor";
                break;
            case "mais-consumidos":
                endpoint = "/relatorios/mais-consumidos";
                break;
            case "mais-consumidos-tipo-raca":
                endpoint = "/relatorios/mais-consumidos-tipo-raca";
                break;
            default:
                return;
        }

        try {
            const response = await fetch(`http://localhost:3000${endpoint}`);
            const dados = await response.json();
            
            if (tipo === "mais-consumidos-tipo-raca") {
                const agrupado = dados;
                const resultadoConvertido = Object.entries(dados as Record<string, { itens: { nome: string, quantidade: number }[] }>).flatMap(
                ([grupo, { itens }]) =>
                    itens.map(item => ({
                    nome: `${grupo} - ${item.nome}`,
                    quantidade: item.quantidade
                    }))
                );
                setResultados(resultadoConvertido.slice(0, 10));
            } else {
                setResultados(Array.isArray(dados) ? dados : [...(dados.produtos || []), ...(dados.servicos || [])]);
            }
        } catch (error) {
            console.error("Erro ao carregar relatório:", error);
        }
    }

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
                        <select id="cliente-select" className="form-select" value={tipoRelatorio} onChange={(e) => {const tipo = e.target.value; setTipoRelatorio(tipo); buscarRelatorio(tipo);}}>
                            <option value="">Selecione...</option>
                            <option value="quantidade">Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade.</option>
                            <option value="valor">Listagem dos 5 clientes que mais consumiram em valor.</option>
                            <option value="mais-consumidos-tipo-raca">Listagem dos 10 serviços ou produtos mais consumidos por tipo e raça de pets.</option>
                            <option value="mais-consumidos">Listagem geral dos serviços ou produtos mais consumidos.</option>
                        </select>
                    </div>
                    <ul className="list-group container-lg d-flex flex-column gap-2 my-4">
                        {resultados.map((item, index) => (
                            <ListagemRelatorios key={index} nome={item.nome} quantidade={item.quantidade} valor={item.valor} />
                        ))}
                    </ul>
                </form>
            </div>
        </>
    );
};
