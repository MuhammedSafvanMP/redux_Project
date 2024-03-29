import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from'react-bootstrap/Container';
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';


export default function Products() {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products`)
            .then(res => res.json())
            .then(data => setProducts(data.slice(1,50)))
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    }
    return (
        <Container style={{paddingTop : "10rem"}}>
        <Row>
            {products &&
                products.map(product => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ marginBottom: '20px' }}>
                            <Card.Img variant="top" src={product.images} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                  $ {product.price}.00
                                </Card.Text>
                            </Card.Body>
                                <Button  onClick={() => handleAdd(product)} variant="primary"style={{cursor: "pointer"}} >ADD TO CART</Button>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </Container>
    );
}
