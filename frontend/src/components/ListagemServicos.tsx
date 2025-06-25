import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { excluirServico } from "../api/servicosApi";

type Servico = {
    id?: number,
    nome: string,
    valor: string
}

type Props = {
    servico: Servico,
    onAtualizar: () => void,
    onEditar: (servico: Servico) => void;
}

export default function ListagemServicos ({ servico, onAtualizar, onEditar }: Props) {
    const handleDelete = async () => {
        if (servico.id) {
            const confirmar = window.confirm("Você tem certeza que deseja excluir este serviço?");
            if (!confirmar) return;

            try {
                await excluirServico(servico.id);
                onAtualizar();
            } catch (error) {
                console.error("Erro ao excluir serviço:", error);
            }
        }
    };


    return (
        <li className="list-group-item d-flex justify-content-between align-items-center gap-4 flex-wrap">
            <div className="d-flex flex-column">
                <strong>{servico.nome}</strong>
                <small><span className="fw-semibold">Valor: </span>{servico.valor}</small>
            </div>
            <div className="d-flex gap-4">
                <button className="btn-delUpd" onClick={handleDelete}>
                    <img className="img-fluid" src="https://img.icons8.com/?size=100&id=85081&format=png&color=000000" alt="delete" width={20}></img>
                </button>
                <button className="btn-delUpd" onClick={() => onEditar(servico)}>
                    <img className="img-fluid" src="https://img.icons8.com/?size=100&id=82744&format=png&color=000000" alt="update" width={20}></img>
                </button>
            </div>
        </li>
    );
};
