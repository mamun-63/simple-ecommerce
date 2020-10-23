import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { useStateValue } from '../context/StateProvider'
// import products from '../products'

const HomeScreen = () => {
  // pulling basket array from global state
  const [{ basket }, dispatch] = useStateValue()

  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {basket.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} key={product.id} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
