import { Link } from "react-router-dom";
import Parceiro from "../Parceiro";
import Titulo from "../Titulo";
import style from "./Relacionados.module.scss";

const Relacionados: React.FC = () => {
  return (
    <section className={style.relacionados}>
      <Titulo>
        Produtos relacionados
      </Titulo>

      <Link className={style.relacionados__link} to={'/'}>Ver todos</Link>

      <div className={style.relacionados__parceiros}>
        <Parceiro titulo={'Produtos'} className={'parceiro--alt'} />
        <Parceiro titulo={'Produtos'} className={'parceiro--alt'} />
      </div>
    </section>
  )
}

export default Relacionados;