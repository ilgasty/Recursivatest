import React, { useEffect, useState } from 'react'
import { GetPunto3 } from '../../../helper/GetApi';
import { Punto3Item } from './Punto3Item';

export const Punto3 = () => {
  const [state, setstate] = useState({
    socios:[],
    
});
  

   useEffect(() => {
    //console.log('prueba 1')
    GetPunto3().then(imgs=>{
        setstate({
          socios:imgs,
          });    
       });
}, [])
  return (
    <div className="punto3__container">
  <h1 className="punto3__tile">Personas Casadas</h1>
  <h3 className="punto3__tile">Con estudios universitarios</h3>

  <div className="punto3__row">
    <div className="col-4">Nombre</div>
    <div className="col-4">Edad</div>
    <div className="col-4">Equipo</div>
    
  </div> 
  {
                state.socios.map( (value,index) => (
                    <Punto3Item key={ index } {...value} />
                ))
            }
  
  
</div> 


  )
}
