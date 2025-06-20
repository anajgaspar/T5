import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

interface ListagemProps {
    nome: string,
    raca: string,
    genero: string,
    tipo: string
}

export default function ListagemPets ({ nome, raca, genero, tipo }: ListagemProps) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center gap-4 flex-wrap">
            <div className="d-flex flex-column">
                <p className="mb-1"><strong>Nome:</strong> {nome}</p>
                <p className="mb-1"><strong>Raça:</strong> {raca}</p>
                <p className="mb-1"><strong>Gênero:</strong> {genero}</p>
                <p className="mb-0"><strong>Tipo:</strong> {tipo}</p>
            </div>
            <div className="d-flex gap-4">
                <a href="/">
                    <img className="img-fluid" src="https://img.icons8.com/?size=100&id=85081&format=png&color=000000" alt="delete" width={20} />
                </a>
                <a href="/">
                    <img className="img-fluid" src="https://img.icons8.com/?size=100&id=82744&format=png&color=000000" alt="update" width={20} />
                </a>
            </div>
        </li>
    );
}
