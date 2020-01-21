import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Container, Title, Card, Table, Tab, Content } from 'rbx';
import CardGrid from './components/CardGrid.js';

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

  return (
    <CardGrid products = {products}/>
  );
};


export default App;