import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function FormCadastroProdutoServico() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input type="text" className="form-control" id="nome" />
            </div>
            <div className="mb-3">
                <label htmlFor="valor" className="form-label">Valor(R$):</label>
                <input type="number" className="form-control" id="valor" />
            </div>
            <button id="botao" className="rounded rounded-full">Cadastrar</button>
        </form>
    );
}
