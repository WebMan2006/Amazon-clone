import React from "react";
import { Col, Row } from "react-bootstrap";
import { sampleProducts } from "../data";
import { Product } from "../types/product";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Row>
      {sampleProducts.map((product: Product) => (
        <Col key={product.slung} sm={6} md={4} lg={3}>
          <Link to={`product/${product.slung}`}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;
