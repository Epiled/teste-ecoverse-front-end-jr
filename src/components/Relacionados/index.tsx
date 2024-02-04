import Parceiro from "../Parceiro";
import Titulo from "../Titulo";
import style from "./Relacionados.module.scss";
import fundo from '../../assets/img/produtos.png';

function Relacionados() {
  return (
    <section className={style.relacionados}>
      <Titulo>
        Produtos relacionados
      </Titulo>

      <a className={style.relacionados__link} href="">Ver todos</a>

      <div className={style.relacionados__parceiros}>
        <Parceiro titulo={'Produtos'} className={'parceiro--alt'} />
        <Parceiro titulo={'Produtos'} className={'parceiro--alt'} />
      </div>
    </section>
  )
}

export default Relacionados;