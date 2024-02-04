import style from './Titulo.module.scss'

function Titulo({children}: {children: string}) {
  return (
    <h2 className={style.titulo}>
      {children}
    </h2>
  )
}

export default Titulo;