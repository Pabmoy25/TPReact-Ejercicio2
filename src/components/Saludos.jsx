import React from 'react';

const Saludos = (props) => {
    return (
        <section>
            <h2>Hola {props.enviarProps} </h2>
        </section>
    );
};

export default Saludos;