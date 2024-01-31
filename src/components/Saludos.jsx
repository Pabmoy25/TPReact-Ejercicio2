import React from 'react';

const Saludos = (props) => {
    return (
        <section>
            <h1>Hola {props.enviarProps} </h1>
        </section>
    );
};

export default Saludos;