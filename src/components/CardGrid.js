import 'rbx/index.css';
import {Card, Content, Column, Image} from 'rbx';
import React from 'react';

const ShirtCard = ({title, image, price, priceFormat}) => (
    // <Card>
    //     <Card.Content>
    //         <Content>
    //             {title}
    //         </Content>
    //     </Card.Content>
    // </Card>
    <Column>
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
            </Card.Content>
        </Card>
    </Column>
);

const CardGrid = ({products}) => {
    return (
        <Column.Group vcentered multiline desktop mobile>
            {products.map(product => <ShirtCard price={product.price} 
                                                priceFormat={product.currencyFormat} 
                                                title={product.title} 
                                                image={product.sku}/>)}
         </Column.Group>
    );
};

export default CardGrid;
