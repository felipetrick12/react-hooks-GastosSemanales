import React from 'react';
import {revisarPresupuesto} from '../helpers/revisarPresupuesto'

export const ControlPresupuesto = ({cantidadDinero,restante}) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {cantidadDinero}
            </div>
            <div className={revisarPresupuesto(cantidadDinero,restante)}>
                Restante: $ {restante}
            </div>
          
        </>
    )
}
