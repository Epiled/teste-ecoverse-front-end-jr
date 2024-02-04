import monitorarTabletSmartphone from '../../assets/svg/monitorar-tablet-e-smartohone-1.svg';
import supermercados from '../../assets/svg/supermercados-1.svg';
import whiskey from '../../assets/svg/whiskey.svg';
import ferramentas from '../../assets/svg/ferramentas-1.svg';
import cuidadosDeSaude from '../../assets/svg/cuidados-de-saude-1.svg';
import corrida from '../../assets/svg/corrida-1.svg';
import moda from '../../assets/svg/moda-1.svg';
import style from './Categorias.module.scss';

function Categorias() {
  return (
    <div className={style.categorias}>
      <a className={`${style.categoria} ${style['categoria--ativo']}`} href="">
        <div className={`${style.categoria__box} ${style['categoria__box--ativo']}`}>
          <img className={style.categoria__imagem} src={monitorarTabletSmartphone} alt="" />
        </div>
        Tecnologia
      </a>
      <a className={style.categoria} href="">
        <div className={style.categoria__box}>
          <img src={supermercados} alt="" />
        </div>
        Supermercado
      </a>
      <a className={style.categoria} href="">
        <div className={style.categoria__box}>
          <img src={whiskey} alt="" />
        </div>
        Bebidas
      </a>
      <a className={style.categoria} href="">
        <div className={style.categoria__box}>
          <img src={ferramentas} alt="" />
        </div>
        Ferramentas
      </a>
      <a className={style.categoria} href="">
        <div className={style.categoria__box}>
          <img src={cuidadosDeSaude} alt="" />
        </div>
        Saúde
      </a>
      <a className={style.categoria} href="">
        <div className={style.categoria__box}>
          <img src={corrida} alt="" />
        </div>
        Esportes e Fitness
      </a>
      <a className={style.categoria} href="">
        <div className={style.categoria__box}>
          <img src={moda} alt="" />
        </div>
        Moda
      </a>
    </div>
  )
}

export default Categorias;