import classNames from 'classnames';
import style from './Titulo.module.scss'

function Titulo({children, alt}: {children: string, alt?: boolean}) {
  return (
    <h2 className={classNames(
      style.titulo,
      {[ style['titulo--alt']]: alt }
      )}>
      {children}
    </h2>
  )
}

export default Titulo;