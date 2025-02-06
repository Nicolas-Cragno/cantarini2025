import React from 'react'

export default function ItemCarga(props) {
    const { nro } = props;
  return (
    <div className='itemCarga izquierda'>
        <h3 className='itemCargaNumber centrado'>{nro}</h3>
        <label>Fecha</label>
        <input type='date'></input>
        <label>Litros</label>
        <input type='number'></input>
        <label>Lugar</label>
        <input type='text'></input>
    </div>
  )
}
