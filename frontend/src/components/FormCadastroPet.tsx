import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function FormCadastroPet() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input type="text" className="form-control" id="nome" />
            </div>
            <div className="mb-3">
                <label htmlFor="raca" className="form-label">Raça:</label>
                <input type="text" className="form-control" id="raca" />
            </div>
            <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo:</label>
                <input type="text" className="form-control" id="tipo" />
            </div>
            <div className="mb-3">
                <label htmlFor="genero" className="form-label">Gênero:</label>
                <input type="text" className="form-control" id="genero" />
            </div>
            <div className="mb-3">
                <label htmlFor="dono-select" className="form-label">Dono:</label>
                <select id="dono-select" className="form-select">
                    <option></option>
                    <option>Lavínia</option>
                    <option>João</option>
                    <option>Marina</option>
                </select>
            </div>
            <button id="botao" className="rounded rounded-full">Cadastrar</button>
        </form>
    );
}
