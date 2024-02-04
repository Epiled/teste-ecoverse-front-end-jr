import Botao from "../Botao";
import style from './Banner.module.scss'

function Banner() {
  return (
    <section className={style.banner}>
      <div className={style.banner__wrap}>
        <div className={style.banner__flutuante}>
          <h1 className={style.banner__titulo}>
            Venha conhecer nossas promoções
            <span className={style.banner__desconto}>50% Off nos produtos</span>
          </h1>
          <Botao ancora="#" className={'botao--banner'}>
            Ver Produto
          </Botao>
        </div>
      </div>
    </section>
  )
}

export default Banner;