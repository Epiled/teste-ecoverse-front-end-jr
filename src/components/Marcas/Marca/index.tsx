import style from './Marca.module.scss';
import vtex from '../../../assets/img/logo.png'

function Marca() {
  return (
    <a className={style.marca} href="">
      <img className={style.marca__imagem} src={vtex} alt="" />
    </a>
  )
}

export default Marca;