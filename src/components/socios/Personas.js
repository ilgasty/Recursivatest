import React from 'react'
import { useSelector } from 'react-redux'
import { Punto1 } from './Punto1'
import { Portada } from './puntos/Portada'
import { Punto2 } from './puntos/Punto2'
import { Punto3 } from './puntos/Punto3'
import { Punto4 } from './puntos/Punto4'
import { Punto5 } from './puntos/Punto5'
import { Sidebar } from './Sidebar'

export const Personas = () => {
  const {test}=useSelector((state) => state.aut)
console.log(test);
  return (
    <div className="presona__main-content">
      <Sidebar/>
      <main>
      {test==="Punto 0" && <Portada />
      }
      {test==="Punto 1" && <Punto1 />
      }
      {test==="Punto 2" && <Punto2/>
      }
       {test==="Punto 3" && <Punto3/>
      }
       {test==="Punto 4" && <Punto4/>
      }
      {test==="Punto 5" && <Punto5/>
      }
      

      </main>
    </div>
  )
}
