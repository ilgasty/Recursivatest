import React from 'react'

export const SolicitudRepo = ({title,detalle,url,handlepunto}) => {
 
    return (
    <div className="persona__entry pointer" onClick={handlepunto}>
            
            <div 
                className="persona__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                }}
            ></div>

            <div className="persona__entry-body">
                <p className="persona__entry-title">
                   {title}
                </p>
                <p className="persona__entry-content">
                    {detalle}
                </p>
            </div>

           

        </div>
  )
}
