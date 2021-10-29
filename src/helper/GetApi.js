
export const GetPunto1 = async() => {
  const url =`http://localhost:65072/api/socio/punto1`;
  //const url ='https://api.mercadolibre.com/items/MLA925896402';
  const resp = await fetch(url);
  const results= await resp.json();
  //console.log(results);
  
  
  //console.log(socio);
  return results;
}
export const GetPunto2 = async() => {
  const url =`http://localhost:65072/api/socio/punto2`;
  //const url ='https://api.mercadolibre.com/items/MLA925896402';
  const resp = await fetch(url);
  const results= await resp.json();
  //console.log(results);
  
  
  //console.log(socio);
  return results;
}
export const GetPunto3 = async() => {
  const url =`http://localhost:65072/api/socio/punto3`;
  //const url ='https://api.mercadolibre.com/items/MLA925896402';
  const resp = await fetch(url);
  const results= await resp.json();
  const socio = results.map(so=>{
    return{
        nombre:so.nombre,
        edad:so.edad,
        equipo:so.equipo,
        estudios:so.estudios,
        estadoCivil:so.estadoCivil,

    }
});
  //console.log(socio);
  return socio;
}
export const GetPunto4 = async() => {
  const url =`http://localhost:65072/api/socio/punto4`;
  //const url ='https://api.mercadolibre.com/items/MLA925896402';
  const resp = await fetch(url);
  const results= await resp.json();
  const socio = results.map(so=>{
    return{
        nombre:so.nombre,
        usados:so.cantidad,
        

    }
});
  //console.log(socio);
  return socio;
}

export const GetPunto5 = async() => {
  const url =`http://localhost:65072/api/socio/punto5`;
  //const url ='https://api.mercadolibre.com/items/MLA925896402';
  const resp = await fetch(url);
  const results= await resp.json();
  const socio = results.map(so=>{
    return{
        equipo:so.equipo,
        cantSocio:so.cantSocio,
        promedioedad:so.promedioedad,
        menoredad:so.menoredad,
        mayoredad:so.mayoredad,
    }
});
  console.log(socio);
  return socio;
}