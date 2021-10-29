import React from 'react'

export const Punto5Item = ({equipo,cantSocio,promedioedad,menoredad,mayoredad}) => {
  return (
    <div className="punto3__row">
    <div className="col-4">{equipo}</div>
    <div className="col-2">{cantSocio}</div>
    <div className="col-2">{promedioedad}</div>
    <div className="col-2">{menoredad}</div>
    <div className="col-2">{mayoredad}</div>
    
  </div> 
  )
}
