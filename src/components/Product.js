import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useStateValue } from '../context/StateProvider'

const Product = ({ product }) => {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    // remove the item from the basket, ------not working

    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: product.id,
    })
  }

  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <strong>{product.name}</strong>
        <Card.Text as='h3' className='my-2'>
          ${product.price}
        </Card.Text>
        <Card.Text as='h5'>{product.profitPercentage}% profit</Card.Text>
        <Card.Text as='p'>{product.category}</Card.Text>
        <Button
          onClick={removeFromBasket}
          variant='outline-dark'
          size='sm'
          block
        >
          Remove
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Product
