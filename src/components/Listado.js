import React from 'react'
import { Gasto } from './Gasto'

export const Listado = ({gastos,title}) => {
    return (
        <div className="gastos-realizados">
        <h2>{title}</h2>
            {
            gastos.map(gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                />
            ))
            }
         </div>
    )
}
