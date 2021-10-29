import React from 'react'

export const Punto3Item = ({nombre,edad,equipo}) => {
  return (
    <div className="punto3__row">
    <div className="col-4">{nombre}</div>
    <div className="col-4">{edad}</div>
    <div className="col-4">{equipo}</div>
    
  </div> 
  )
}
