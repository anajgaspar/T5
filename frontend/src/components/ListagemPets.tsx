import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

interface ListagemProps {
    nome: string,
    raca: string,
    genero: string
}

export default function ListagemPets ({ nome, raca, genero }: ListagemProps) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center gap-4 flex-wrap">
            <div className="d-flex flex-column">
                <strong>{nome}</strong>
                <small><span className="fw-semibold">Tipo/Raça: </span>{raca}</small>
                <small><span className="fw-semibold">Gênero: </span>{genero}</small>
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
