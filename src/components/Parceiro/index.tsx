import Botao from "../Botao";
import style from "./Parceiro.module.scss"

interface Props {
  titulo: string,
  className?: string,
}

function Parceiro({titulo, className}: Props) {
  return (
    <div className={`${style.parceiro} ${style[String(className)]}`}>
      <div className={style.parceiro__conteudo}>
      <h3 className={style.parceiro__titulo}>
        {titulo}
      </h3>
      <p className={style.parceiro__txt}>
        Lorem ipsum dolor sit amet, consectetur
      </p>
      <Botao ancora="#">
        Confira
      </Botao>
      </div>
    </div>
  )
}

export default Parceiro;