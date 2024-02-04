import React from "react";
import style from './Botao.module.scss';

interface Props {
  children?: React.ReactNode,
  ancora: string,
  className?: string,
}

function Botao({ children, ancora, className }: Props) {
  return (
    <a className={`${style.botao} ${style[String(className)]}`} href={ancora}>
      {children}
    </a>
  )
}

export default Botao;