import React from 'react';

const Saludos = (props) => {
    return (
        <section>
            <h1>Hello {props.enviarProps} </h1>
        </section>
    );
};

export default Saludos;