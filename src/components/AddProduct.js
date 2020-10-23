import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useStateValue } from '../context/StateProvider'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [profitPercentage, setProfitPercentage] = useState('')
  const [category, setCategory] = useState('RAM')

  const [{ basket }, dispatch] = useStateValue()

  const handleSubmit = e => {
    e.preventDefault()

    if (!name || !price || !profitPercentage) {
      alert('Fill Empty Fields')
    } else {
      let newProduct = {
        id: uuidv4(),
        name: name,
        price: price,
        profitPercentage: profitPercentage,
        category: category,
      }
      console.log(newProduct)
      basket.push(newProduct)
      console.log('Products Array >', basket)
      alert('Product Added Successfully')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      Add Product Name:
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      Add Product Price:
      <input
        type='number'
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      Add Product Profit-Percentage:
      <input
        type='number'
        value={profitPercentage}
        onChange={e => setProfitPercentage(e.target.value)}
      />
      Add Product Category:
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value='RAM'>RAM</option>
        <option value='Motherboard'>Motherboard</option>
        <option value='Graphics Card'>Graphics Card</option>
      </select>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default AddProduct
