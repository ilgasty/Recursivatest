import React, { useEffect, useState } from 'react'
import { GetPunto5 } from '../../../helper/GetApi';
import { Punto5Item } from './Punto5Item';

export const Punto5 = () => {
  const [state, setstate] = useState({
  socios:[],
  
});


 useEffect(() => {
  //console.log('prueba 1')
  GetPunto5().then(imgs=>{
      setstate({
        socios:imgs,
        });    
     });
}, [])
return (
  <div className="punto3__container">
<h1>Cantidad de socios por equipo</h1>

<div className="punto3__row">
  <div className="col-4">Equipo</div>
  <div className="col-2">Cant. Socio</div>
  <div className="col-2">Promedio de edad</div>
  <div className="col-2">Menor Edad</div>
  <div className="col-2">Mayor Edad</div>

  
</div> 
{
              state.socios.map( (value,index) => (
                  <Punto5Item key={ index } {...value} />
              ))
          }


</div> 
  )
}
