import React, {  useState } from 'react'
import {Presupuesto} from '../components/Presupuesto';
import { ControlPresupuesto } from './ControlPresupuesto';
import { Formulario } from './Formulario';
import { Listado } from './Listado';

export const App = () => {

  

    const [cantidadDinero, setCantidad] = useState(0);
    const [restante, setRestante] = useState(0);
    const [condicional,condicionalComponent]= useState(true);
    const [gastos,setGuardarGasto] = useState([])


    const title = gastos.length===0 ? 'No Tienes Gastos' : 'Administra tus Gastos';

    const agregarNuevoGasto =(newgasto) => {
        setGuardarGasto ([
            ...gastos,
            newgasto
        ])

        const presupuestoRestante = parseInt(restante - newgasto.gasto);
        setRestante(presupuestoRestante);
    }

    return (
        <div>
            <header>
            <h1>Gasto Semanal</h1>

            <div className="contenido-principal contenido">
               {
               (condicional)? (
                    <Presupuesto 
                    setCantidad={setCantidad}
                    setRestante={setRestante}
                    condicionalComponent={condicionalComponent}
                    />
               ):(
                    <div className="row">
                    <div className="one-half column">
                        <Formulario
                            agregarNuevoGasto = {agregarNuevoGasto}
                        />
                    </div>
                    <div className="one-half column">
                        <Listado 
                        gastos={gastos}
                        title={title}
                        />
                        <ControlPresupuesto 
                            cantidadDinero={cantidadDinero}
                            restante={restante}
                        />
                    </div>
                    </div>
                  )
               } 

            </div>
           
            </header>
            
        </div>
    )
}