import 'rbx/index.css';
import {Button, Card, Column, Content, Image} from 'rbx';
import React from 'react';
import {addToCart} from './ShoppingCart';
import ShoppingCart from './ShoppingCart';

const ShirtCard = ({addToCart, title, image, price, priceFormat}) => (
    // <Card>
    //     <Card.Content>
    //         <Content>
    //             {title}
    //         </Content>
    //     </Card.Content>
    // </Card>
    <Column size="one-third">
        <Card>
            <Card.Header>
                <Card.Header.Title>
                    {title}
                </Card.Header.Title>
            </Card.Header>
            <Card.Content>
                <Image.Container size='4by10'>
                    <Image src={`data/products/${image}_1.jpg`}/>
                </Image.Container>
                <Content>
                    {priceFormat}{price}
                </Content>
                <Content>
                    Sizes:
                </Content>
                <Button.Group size="small">
                    <Button>S</Button>
                    <Button>M</Button>
                    <Button>L</Button>
                    <Button>XL</Button>
                </Button.Group>
                <Button.Group>
                    <Button onClick={addToCart}>Add to cart</Button>
                </Button.Group>
            </Card.Content>
        </Card>
    </Column>
);

const CardGrid = ({products, addToCart}) => {
    return (
        <Column.Group vcentered multiline>
            {products.map(product => <ShirtCard addToCart = {()=>addToCart(product)}
                                                price={product.price} 
                                                priceFormat={product.currencyFormat} 
                                                title={product.title} 
                                                image={product.sku}/>)}
         </Column.Group>
    );
};

export default CardGrid;
