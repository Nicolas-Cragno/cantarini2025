import React from 'react'

export default function ItemCarga(props) {
    const { nro } = props;
  return (
    <div className='itemCarga izquierda'>
        <h3 className='itemCargaNumber centrado'>{nro}</h3>
        <label>Fecha</label>
        <input></input>
        <label>Litros</label>
        <input></input>
        <label>Lugar</label>
        <input></input>
    </div>
  )
}
