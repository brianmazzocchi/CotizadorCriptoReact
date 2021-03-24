import React, { Fragment, useState } from 'react';

const useMoneda = () => {
    //LO que esta aca es el state del custom hook
    const [state, actualizarState] = useState('');
    
    //LO que esta aca adento es lo que se muestra en pantalla
    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    );

    //Retornar state, interfaz y fn que modifica el state.
        return [state, Seleccionar, actualizarState];
}

export default useMoneda;