import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../components/Gallery.css';

function Gallery() {
  return (
    <Container>
      <h2>Gallery</h2>
      <Row>
        <Col xs={6} md={4}>
          <img src="https://via.placeholder.com/150" alt="gallery item" />
        </Col>
        <Col xs={6} md={4}>
          <img src="https://via.placeholder.com/150" alt="gallery item" />
        </Col>
        <Col xs={6} md={4}>
          <img src="https://via.placeholder.com/150" alt="gallery item" />
        </Col>
        <Col xs={6} md={4}>
          <img src="https://via.placeholder.com/150" alt="gallery item" />
        </Col>
        <Col xs={6} md={4}>
          <img src="https://via.placeholder.com/150" alt="gallery item" />
        </Col>
        <Col xs={6} md={4}>
          <img src="https://via.placeholder.com/150" alt="gallery item" />
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
