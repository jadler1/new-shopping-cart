import 'rbx/index.css';
import {Card, Content, Column} from 'rbx';
import React from 'react';

const ShirtCard = ({title}) => (
    // <Card>
    //     <Card.Content>
    //         <Content>
    //             {title}
    //         </Content>
    //     </Card.Content>
    // </Card>
    <Column>
        <Card>
            <Card.Content>
                <Content>
                    {title}
                </Content>
            </Card.Content>
        </Card>
    </Column>
);

const CardGrid = ({products}) => {
    return (
        <Column.Group vcentered multiline desktop mobile>
            {products.map(product => <ShirtCard title={product.title}/>)}
         </Column.Group>
    );
};

export default CardGrid;
