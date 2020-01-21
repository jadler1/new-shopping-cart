import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Container, Content} from 'rbx';
import CardGrid from './components/CardGrid';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);



  const [cartContents, setCartContents] = useState([]);

  const addToCart = (product) =>{
    var newCartContents = cartContents.map((oldproduct) => oldproduct);
    newCartContents.push(product);
    setCartContents(newCartContents);
  }
  return (
    <Container>
      
        <ShoppingCart cartContents={cartContents} setCartContents={setCartContents}/>
        <div style={{width:"60%", margin:"auto", height:"60%"}}>
          <CardGrid products = {products} addToCart = {addToCart}/>
        </div>

    </Container>
  );
};


export default App;