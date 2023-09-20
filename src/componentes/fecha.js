import React from 'react';
import mañana from './amanecer.png';
import noche from './luna.png';

const mesesDelAño = ['Enero', 'Febrebro', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
export default function Fecha({dia}) {
  const fecha = new Date();
  fecha.setDate(fecha.getDate() + dia)
  let horario = ''
  if(fecha.getHours() > 5 && fecha.getHours() < 20){
    horario = mañana
  } else {
    horario = noche
  }

  return (
    <div>
      <h1>Hoy es {fecha.getDate()} de {mesesDelAño[fecha.getMonth()]}. Son las {fecha.getHours()}:{fecha.getMinutes()}</h1>
      <img src={horario} />
    </div>
  );
}