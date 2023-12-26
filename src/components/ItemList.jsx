import React from 'react'
import Item from './Item'
import { Grid } from '@chakra-ui/react'
const ItemList = ( {productos} ) => {

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {productos.length > 0 && productos.map((prod) => {
        return (
          <Item key={prod.id} producto={prod} />
        )
      })
      }
     </Grid>
  )
}

export default ItemList;