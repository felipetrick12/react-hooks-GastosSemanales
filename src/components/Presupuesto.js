import React, { useState } from 'react'

export const Presupuesto = ({setCantidad,setRestante,condicionalComponent}) => {

    const [presupuesto, setPresupuesto] = useState(0);
    const [error, setError] = useState(false);

    const handleEvent =(e)=>{
        setPresupuesto(parseInt(e.target.value,10));
    }

    const handleChange=(e) => {
        e.preventDefault();

        if (presupuesto < 1 || isNaN(presupuesto) ) {
            setError(true);
            return;
        }else{
            setError(false);
        }

        
        setCantidad(presupuesto);
        setRestante(presupuesto);
        condicionalComponent(false);
    }

    return (
        <>
        <h2>Coloca tu presupuesto</h2>
            { 
            error ? <p className="alert alert-danger error">Ingrese Presupuesto</p> : null 
            } 
          
          <form onSubmit={handleChange}> 
            <input 
            type="number"
            className="u-full-width"
            placeholder='Coloca tu presupuesto'
            name="presupuesto"
            onChange={handleEvent}
            />

            <input 
            type="submit"
            className="u-full-width"
            value='Definir Presupuesto'
            />

          </form>
        </>
    )
}