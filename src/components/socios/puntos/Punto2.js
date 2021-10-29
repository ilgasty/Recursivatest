import React, { useEffect, useState } from 'react'
import { GetPunto2 } from '../../../helper/GetApi';

export const Punto2 = () => {
  const [state, setstate] = useState({
    socios:[],
    
});
  
   useEffect(() => {
    //console.log('prueba 1')
    GetPunto2().then(imgs=>{
      //console.log(imgs);
        setstate({
          socios:imgs,
          });    
       });
}, [])
  return (
    
      <div className="punto2__container punto2__tile">
      <h1>
      Socios de racing  </h1>
      <h3>Promedio de edad</h3>
      <br/>
      <h3>{state.socios}</h3>
      </div>
  
  )
}
