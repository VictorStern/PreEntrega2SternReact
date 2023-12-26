import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirInfo } from '../utils/pedirData'
import ItemList from './ItemList'
import { Container } from '@chakra-ui/react';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        pedirInfo()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria))
                } else {
                    setProductos(res)
                }
            })
    }, [categoria])

    return (

        <Container maxW='80%'>
            <ItemList productos={productos} />

        </Container>

    )
}


export default ItemListContainer;