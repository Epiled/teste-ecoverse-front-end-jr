import { forwardRef } from 'react';
import style from './Marca.module.scss';
import vtex from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Marca = forwardRef<HTMLAnchorElement>((_, ref) => {
  return (
    <Link ref={ref} className={style.marca} to={'/'}>
      <img className={style.marca__imagem} src={vtex} width={171} height={171} alt="#" />
    </Link>
  );
});

export default Marca;
