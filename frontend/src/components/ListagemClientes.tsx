import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { excluirCliente } from "../api/clientesApi";
import { Link } from 'react-router-dom';

type Telefone = {
    id: number,
    numero: string,
    clienteId: number
};

type Rg = {
  numero: string;
};

type Cliente = {
    id?: number,
    nome: string,
    nomeSocial: string,
    cpf: string,
    rgs: Rg[],
    telefones: Telefone[],
    pets: string[]
}

type Props = {
    cliente: Cliente,
    onAtualizar: () => void,
    onEditar: (cliente: Cliente) => void;
}

export default function ListagemClientes ({ cliente, onAtualizar, onEditar }: Props) {
    const handleDelete = async () => {
        if (cliente.id) {
            const confirmar = window.confirm("Você tem certeza que deseja excluir este cliente?");
            if (!confirmar) return;

            try {
                await excluirCliente(cliente.id);
                onAtualizar();
            } catch (error) {
                console.error("Erro ao excluir cliente:", error);
            }
        }
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center gap-4 flex-wrap">
            <div className="d-flex flex-column">
                <strong>{cliente.nome}</strong>
                <small><span className="fw-semibold">CPF: </span>{cliente.cpf}</small>
                <small><span className="fw-semibold">Telefone: </span>
                    {cliente.telefones.map((telefone) => (
                        <span key={telefone.id}>{telefone.numero} </span>
                    ))}
                </small>
            </div>
            <div className="d-flex gap-4">
                <button className="btn-delUpd" onClick={handleDelete}>
                    <img className="img-fluid" src="https://img.icons8.com/?size=100&id=85081&format=png&color=000000" alt="delete" width={20}></img>
                </button>
                <button className="btn-delUpd" onClick={() => onEditar(cliente)}>
                    <img className="img-fluid" src="https://img.icons8.com/?size=100&id=82744&format=png&color=000000" alt="update" width={20}></img>
                </button>
                <Link to={`/cliente/${cliente.id}`}>
                    <img className="img-fluid" src="https://img.icons8.com/?size=100&id=85789&format=png&color=000000" alt="profile" width={20}></img>
                </Link>
            </div>
        </li>
    );
};
