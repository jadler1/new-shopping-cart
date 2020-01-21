import React, { useState } from 'react';
import 'rbx/index.css';
import {Button, Card, Container, Content, Image} from 'rbx';


const ShoppingCart = (cartContents, setCartContents) => {
    const [open, setOpen] = useState(false);

    const ToggleCart = () =>{
        setOpen(!open)
    }
    return (
        <ShoppingBar open={open} toggle={ToggleCart} contents={cartContents} setContents={setCartContents}/>
    );
};

const ShoppingBar = (open) =>{
    console.log(open.contents);
    if(open.open){
        return (
            <Container>
                <Container>
                    <Button onClick={open.toggle}>
                        <Image.Container size='16px'>
                            X
                        </Image.Container>
                    </Button>
                </Container>
                <Container>
                    {open.contents.cartContents.map((product)=>
                        <CartCard 
                            title={product.title} 
                            image={product.sku} 
                            priceFormat={product.currencyFormat}
                            price={product.price}/>
                    )}
                </Container>
            </Container>
        );
    }
    else{
        return(
            <Container>
                <Button onClick={open.toggle}>
                    <Image.Container size='16px'>
                        <Image src='data/products/cart.png'/>
                    </Image.Container>
                </Button>
            </Container>
        );
    }
};

const CartCard = (title, image, priceFormat, price) => {
    console.log(title)
    return(
        <Card>
            <Card.Header>
                <Card.Header.Title>
                    {title.title}
                </Card.Header.Title>
            </Card.Header>
            <Card.Content>
                <Image.Container size='4by10'>
                    <Image src={`data/products/${title.image}_2.jpg`}/>
                </Image.Container>
                <Content>
                    {title.priceFormat}{title.price}
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
                    <Button >Remove From Cart</Button>
                </Button.Group>
            </Card.Content>
        </Card>
    );
};


export default ShoppingCart;
