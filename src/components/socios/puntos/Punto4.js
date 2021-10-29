import React, { useEffect, useState } from 'react'
import { GetPunto4 } from '../../../helper/GetApi';
import { Punto4Item } from './Punto4Item';

export const Punto4 = () => {
  const [state, setstate] = useState({
    socios:[],
    
});
  

   useEffect(() => {
    //console.log('prueba 1')
    GetPunto4().then(imgs=>{
        setstate({
          socios:imgs,
          });    
       });
}, [])
  return (
    <div className="punto4__container">
  <h1>Personas Casadas</h1>

  <div className="punto4__row">
    <div className="col-6">Nombre</div>
    <div className="col-6">Mas usados</div>
  
    
  </div> 
  {
                state.socios.map( (value,index) => (
                    <Punto4Item key={ index } {...value} />
                ))
            }
  
  
</div> 
  )
}
