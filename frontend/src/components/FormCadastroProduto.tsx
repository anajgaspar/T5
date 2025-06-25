import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";
import { registrarProduto, atualizarProduto } from '../api/produtosApi'

type Produto = {
    id?: number,
    nome: string,
    valor: string
}

type Props = {
  modo: "cadastrar" | "atualizar",
  onFinalizar: () => void,
  produto?:Produto | null;
};

export default function FormCadastroProduto({ modo, onFinalizar, produto }: Props) {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");

    useEffect(() => {
        if (modo === "atualizar" && produto) {
            setNome(produto.nome);
            setValor(produto.valor);
        }
    }, [modo, produto]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const produtoAtualizado: Produto = {
            id: produto?.id,
            nome,
            valor
        };

        try {
            if (modo === "cadastrar") {
                await registrarProduto(produtoAtualizado);
                alert("Produto cadastrado com sucesso!");
            } else if (modo === "atualizar" && produtoAtualizado.id) {
                await atualizarProduto(produtoAtualizado, produtoAtualizado.id);
                alert("Produto atualizado com sucesso!");
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
