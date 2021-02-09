import React from 'react';
//typos de los porperties
import PropTypes from 'prop-types';


const PrimeraApp = ({ saludo }) =>{
//EJEMPLO PARA MAQUETADO DE JSON
// const saludo = {
//     nombre: 'luis',
//     edad: 30
//};

    return (
    <>
    <h1>{ saludo }</h1>
        {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
        <p>mi primera aplicacion</p>
    </>
    );
}

//validar las propiedades como los atributos en C#
//retorna un warning en la consola
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;