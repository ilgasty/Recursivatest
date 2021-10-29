import React, { useEffect, useState } from 'react'
import { GetPunto1 } from '../../helper/GetApi';

export const Punto1 = () => {
  const [state, setstate] = useState({
    socios:[],
    
});
  
   useEffect(() => {
    //console.log('prueba 1')
    GetPunto1().then(imgs=>{
      //console.log(imgs);
        setstate({
          socios:imgs,
          });    
       });
}, [])
  return (
    <div className="punto1__main-content">
      <div className="punto1__content punto__tile">
      <h2>
      Total Socios Registrados
      </h2>
      <br/>
      <h1>{state.socios}</h1>
      </div>
    </div>
  )
}
