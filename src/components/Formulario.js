import React, { useState } from 'react'
import shortid from 'shortid'

export const Formulario = ({agregarNuevoGasto}) => {

    const [nombre, setNombre] = useState('');
    const [gasto, setGasto] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto =(e) => {
        e.preventDefault();

        if (gasto < 1 || isNaN(gasto) || nombre.trim() === '') {
            setError(true)
            return;
        }else {
            setError(false)
        }

        const newGasto={
            nombre,
            gasto,
            id: shortid.generate()
        }
        agregarNuevoGasto(newGasto);
        setNombre('')
        setGasto(0)
    }
   

    return (
        <>
        <form onSubmit={ agregarGasto}> 
            <h2>Agrega tus gastos aqui </h2>
            {
                (error && nombre.trim()==='') ? <p className="alert alert-danger error">Nombre Obligatorio</p> : null ||
                (error && gasto < 1 ) ? <p className="alert alert-danger error">Gasto Invalido</p> : null ||
                (error && isNaN(gasto)) ? <p className="alert alert-danger error">Ingrese Gasto </p> : null

            }
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                type="text"
                className="u-full-width"
                placeholder='Ej. Trasnporte'
                value={nombre}
                onChange={ e=> setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                type="number"
                className="u-full-width"
                placeholder='300'
                value={gasto}
                onChange={e=> setGasto( parseInt(e.target.value ,10) )}
                />
            </div>
            
                <input 
                type="submit"
                className="u-full-width"
                value='Agregar Gasto'
                />
               
        </form>
        </>
    )
}