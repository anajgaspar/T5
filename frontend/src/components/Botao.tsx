import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

interface BotaoProps {
  link: string;
  conteudo: string;
}

export default function Botao({ link, conteudo }: BotaoProps) {
    return (
        <>
            <a id="botao" className="rounded rounded-full" href={link}>
                {conteudo}
            </a>
        </>
    );
}
