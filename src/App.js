import {Container} from 'react-bootstrap'
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Category } from './components/Category';
import { ItemsList } from './components/ItemsList';
import items from './data'
import { useState } from 'react';

function App(){

  const [ dataItems , setDataItems ] = useState(items) ;

  const allCategory = [ "All" , ...new Set( items.map(item => item.category) ) ]
  

  const fitreByCategory = (cat) => {

    if( cat === "All" ){
      setDataItems( items )
    }else {

      const newArr = items.filter( (item) => item.category === cat ) 
      setDataItems( newArr )
    }

  }

  const fitreBySearch = (word) => {

    if(word !== ""){
      const newArr = items.filter( (item) => item.title === word ) 
      setDataItems( newArr )

    }

  }




  return (
    <div className="App">
           <NavBar fitreBySearch={fitreBySearch} />
        <Container>
           <Header />
           <Category fitreByCategory={fitreByCategory}
                     allCategory={allCategory} />
           
           <ItemsList dataItems={dataItems} />

        </Container>
    </div>
  );
}

export default App ;
