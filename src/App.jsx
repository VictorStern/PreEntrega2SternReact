import React from 'react';
import NavBar from './components/NavBAr';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
            <NavBar />

            <ItemListContainer greeting= "Bienvenido a Castabarber"/>
    </div>
  );
}

export default App;
