import React from 'react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const mostrarMensaje = () => {
        contador != 0 ? alert(`${contador} producto/s agregado/s al carrito de compras`) : alert(`Tienes ${contador} producto/s en tu lista`)
    }
    const resta = () => contador > 0 && setContador(contador - 1)


    const suma = () => contador < 10 && setContador(contador + 1)   
    
    return (
        <div>
            { contador > 0 ? <Button colorScheme='green'  size='sm' onClick= {resta}>-</Button> : <Button  disabled>-</Button>}
            <Button colorScheme='blue' size='md' onClick={mostrarMensaje}>
                Agregar al Carrito {contador}
            </Button>
            { contador < 10 ? <Button colorScheme='green' size='sm' onClick= {suma}>+</Button> : <Button  disabled>+</Button>}
        </div>
    )
}

export default ItemCount;