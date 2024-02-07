import React from "react";
import style from './Botao.module.scss';
import classNames from "classnames";

interface Props {
  children?: React.ReactNode,
  ancora: string,
  className?: string,
}

const Botao: React.FC<Props> = ({ children, ancora, className }) => {
  return (
    <a className={classNames(
      style.botao,
      { [style[className || '']]: className }
    )}
      href={ancora}>
      {children}
    </a>
  )
}

export default Botao;