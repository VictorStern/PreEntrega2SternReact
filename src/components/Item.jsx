import React from 'react'
import { Card, CardBody, Stack, Heading,GridItem, Text, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ( {producto} ) => {
  return (
    <GridItem w='100%' className='cardim'>
      <Card >
        <CardBody>
          <Stack >
              <img className='imag' src={producto.imagen} alt={producto.nombre}/>
            <Heading size='md' color='black'>
              <p>Producto: {producto.nombre}</p>
            </Heading>
            <Text color='black' size='md' >Categoría: {producto.categoria}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Link to={`/item/${producto.id}`} >
            <Button className='botonn'>Más detalles</Button>
          </Link>
        </CardFooter>
      
      </Card>
      </GridItem>
  )
}

export default Item;