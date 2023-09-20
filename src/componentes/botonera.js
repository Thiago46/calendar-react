import React, { useState } from 'react';
import Fecha from './fecha';


export default function Counter() {
  const [cont, setAge] = useState(0);
  const [cont2, setCont2] = useState(0);


  function incrementar() {
    setAge( cont+ 1);
  }

  function decrementar() {
    setAge(cont - 1);
  }

  function sumar() {
    setCont2(cont2 + cont);
    
  }

  function restar() {
    setCont2(cont2 - cont);
  }

  return (
    <>
      <h1>{cont}</h1>
      <button onClick={() => {
        decrementar();
      }}>DISMINUIR</button>
      <button onClick={() => {
        incrementar();
      }}>AUMENTAR</button>
      <h1>{cont2}</h1>
      <button onClick={() => {
        restar();
      }}>RESTAR</button>
      <button onClick={() => {
        sumar();
      }}>SUMAR</button>
      <Fecha dia={cont2} />
    </>
  );
}
