import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function FormCadastroCliente() {
    return (
        <form className="pt-3">
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input type="text" className="form-control" id="nome" />
            </div>
            <div className="mb-3">
                <label htmlFor="cpf" className="form-label">CPF:</label>
                <input type="number" className="form-control" id="cpf" />
            </div>
            <div className="mb-3 row">
                <div className="col-md-3">
                    <label htmlFor="ddd" className="form-label">DDD:</label>
                    <input type="number" className="form-control" id="ddd" />
                </div>

                <div className="col-md">
                    <label htmlFor="numero" className="form-label">Número:</label>
                    <input type="number" className="form-control" id="numero" />
                </div>
            </div>
            <button id="botao" className="rounded rounded-full">Cadastrar</button>
        </form>
    );
}
