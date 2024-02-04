import Titulo from "../Titulo";
import style from './Marcas.module.scss';
import Marca from "./Marca";

function Marcas() {
  return (
    <section className={style.marcas}>
      <Titulo>
        Navegue por marcas
      </Titulo>

      <div className={style.marcas__carrousel}>
        <Marca />
        <Marca />
        <Marca />
        <Marca />
        <Marca />
        <Marca />
        <Marca />
      <button className={style.marcas__avancar} aria-label="Botão de avançar marcas"></button>
      </div>
    </section>
  )
}

export default Marcas;