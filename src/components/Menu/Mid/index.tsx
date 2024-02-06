/// <reference types="vite-plugin-svgr/client" />
import Group from '../../../assets/svg/Group.svg?react';
import Heart from '../../../assets/svg/Heart.svg?react';
import UserCircle from '../../../assets/svg/UserCircle.svg?react';
import ShoppingCart from '../../../assets/svg/ShoppingCart.svg?react';
import logo from '../../../assets/img/logo.png';
import style from './Mid.module.scss';
interface IMid {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
  menu: boolean
  calculaMenu: () => void
}

const Mid: React.FC<IMid> = ({ setMenu, menu, calculaMenu }) => {

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
        <Group className={`${style.mid__iconLink} ${style['mid__iconLink--fill']}`} />
        <Heart className={style.mid__iconLink} />
        <UserCircle className={style.mid__iconLink} />
        <ShoppingCart className={style.mid__iconLink} />
      </div>
    </div>
  )
}

export default Mid;