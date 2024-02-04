import group from '../../../assets/svg/Group.svg';
import heart from '../../../assets/svg/Heart.svg';
import userCircle from '../../../assets/svg/UserCircle.svg';
import shoppingCart from '../../../assets/svg/ShoppingCart.svg';
import logo from '../../../assets/img/logo.png';
import style from './Mid.module.scss';

interface IMid {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
  menu: boolean
  calculaMenu: () => void
}

const Mid: React.FC<IMid> = ({setMenu, menu, calculaMenu}) => {
  
  return (
    <div className={style.mid}>
      <img className={style.mid__logo} src={logo} alt='' />

      <div className={style.mid__container}>
        <div className={style.mid__busca}>
          <input className={style.mid__ipt} placeholder='O que você está buscando?' type='search' name='' id='' />
        </div>

        <img
          className={style.mid__hamburguer}
          width='50px'
          height='50px'
          alt=''
          src={logo}
          onClick={() => {
            setMenu(!menu)
            calculaMenu()
          }}
        />
      </div>

      <div className={style.mid__icons}>
        <img className={style.mid__iconLink}
          src={group}
          alt=''
        />
        <img className={style.mid__iconLink}
          src={heart}
          alt=''
        />
        <img className={style.mid__iconLink}
          src={userCircle}
          alt=''
        />
        <img className={style.mid__iconLink}
          src={shoppingCart}
          alt=''
        />
      </div>
    </div>
  )
}

export default Mid;