type Props = {
    nome: string;
    quantidade?: number;
    valor?: string;
};

export default function ListagemRelatorios ({ nome, quantidade, valor }: Props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex flex-column">
                <strong>{nome}</strong>
                {quantidade !== undefined && (
                    <small><span className="fw-semibold">Quantidade: </span>{quantidade}</small>
                )}
                {valor !== undefined && (
                    <small><span className="fw-semibold">Valor total: </span>R$ {valor}</small>
                )}
            </div>
        </li>
    );
}
