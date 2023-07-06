import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    console.log('Query?', searchQuery);
    let url = `https://my-json-server.typicode.com/Revella/react_shop/products?q=${searchQuery}`;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(() => {
    getProduct();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item)=>
          (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll