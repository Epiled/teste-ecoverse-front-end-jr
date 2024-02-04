import { Link } from "react-router-dom";
import classNames from 'classnames';
import crownSimple from '../../../assets/svg/CrownSimple.svg';
import style from './Navegacao.module.scss';

interface INavegacao {
  tamanhoMenu: number
  menuRef: React.RefObject<HTMLDivElement>
}

const Navegacao: React.FC<INavegacao> = ({tamanhoMenu, menuRef}) => {

  return (
    <div className={style.navegacao} style={{ transform: `translateX(${tamanhoMenu}px)` }} ref={menuRef}>
      <Link className={style.navegacao__link} to='#'>Todas Categorias</Link>
      <Link className={style.navegacao__link} to='#'>Supermercado</Link>
      <Link className={style.navegacao__link} to='#'>Livros</Link>
      <Link className={style.navegacao__link} to='#'>Moda</Link>
      <Link className={style.navegacao__link} to='#'>Lançamentos</Link>
      <Link className={classNames(
        [style.navegacao__link],
        [style['navegacao__link--destaque']]
      )} to='#'>Ofertas do dia</Link>
      <Link className={style.navegacao__link} to='#'>
        <img
          src={crownSimple}
          alt=''
        />
        Assinatura
      </Link>
    </div>
  )
}

export default Navegacao;