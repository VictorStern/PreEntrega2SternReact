import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const mostrarMsj = () => {
        alert(`Producto agregado al carrito`)
    }

    const sumar = () => {
        if (contador < 30) {
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <div>
            <Button colorScheme='teal' size='sm' onClick={restar}>
                -
            </Button>
            <Button size='sm' onClick={mostrarMsj}>
                Agregar al carrito {contador}
            </Button>

            <Button colorScheme='teal' size='sm' onClick={sumar}>
                +
            </Button>
        </div>
    );
}

export default ItemCount;
