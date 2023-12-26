import React from 'react'
import { Card, CardBody, Stack, Heading, Text,Container, CardFooter, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ({ item }) => {
    return (
        <div className='cardin'>
            <Card  maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color='green'>
                            <img className='imag' src={item.imagen} alt={item.nombre} />
                            <br />
                            <br />
                            <p>Producto: {item.nombre}</p>
                        </Heading>
                        <Text color='black'>Categoría: {item.categoria}</Text>
                        <Text color='black'>Descripción: {item.descripcion}</Text>
                        <Text color='black'>Precio: ${item.precio}</Text>

                    </Stack>
                </CardBody>
                <CardFooter>
                    <ItemCount />
                </CardFooter>
               
            </Card>
        </div>
    )
}

export default ItemDetail;