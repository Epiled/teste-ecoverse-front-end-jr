import Titulo from "../Titulo";
import style from './Marcas.module.scss';
import Marca from "./Marca";

const Marcas: React.FC = () => {
  return (
    <section className={style.marcas}>
      <Titulo alt={true}>
        Navegue por marcas
      </Titulo>

      <div className={style.marcas__carrousel}>

        {Array.from({ length: 8 }, (_, index) => (
          <Marca key={index} />
        ))}
        
        <button className={style.marcas__avancar} aria-label="Botão de avançar marcas"></button>
      </div>
    </section>
  )
}

export default Marcas;