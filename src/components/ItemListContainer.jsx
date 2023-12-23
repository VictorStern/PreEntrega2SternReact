import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    const productos =[
        {id: 1, titulo: "Producto A", descripcion: "descripcion de producto A", precio: 1000},
        {id: 2, titulo: "Producto B", descripcion: "descripcion de producto B", precio: 1000},
        {id: 3, titulo: "Producto C", descripcion: "descripcion de producto C", precio: 1000},
        {id: 4, titulo: "Producto D", descripcion: "descripcion de producto D", precio: 1000},
        {id: 5, titulo: "Producto E", descripcion: "descripcion de producto E", precio: 1000},
        {id: 6, titulo: "Producto F", descripcion: "descripcion de producto F", precio: 1000},
    ]

    const mostrarProductos = new Promise ((resolve, reject) => {
        if (productos.length >0 ) {
            setTimeout(() => {
                resolve (productos)
                
            }, 3000);
        }else {
            reject("No se obtuvieron productos")
        }
    })
    mostrarProductos
    .then((resultado) => {
        console.log(resultado);
    })
    .catch ((error) => {
        console.log(error);
    })
  return (
    <div>
      < ItemList productos={productos}/>
    </div>
  );
}

export default ItemListContainer;
