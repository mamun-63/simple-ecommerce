import React, { useEffect, useState } from 'react'
import products from '../products'
import { v4 as uuidv4 } from 'uuid'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [profitPercentage, setProfitPercentage] = useState('')
  const [category, setCategory] = useState('RAM')

  const handleSubmit = evt => {
    evt.preventDefault()
    // alert(`Submitting Name, Price, Profit ${name} ${price} ${profitPercentage}`)

    if (!name || !price || !profitPercentage) {
      alert('Fill empty fields')
    } else {
      let newProduct = {
        id: uuidv4(),
        name: name,
        price: price,
        profitPercentage: profitPercentage,
        category: category,
      }
      console.log(newProduct)
      products.push(newProduct)
      console.log('Products Array >', products)

      // clearing form
      // document.forms[0].querySelectorAll('input')
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
      {/* <input type='submit' value='Submit' /> */}
      <button type='submit' value='Submit'>
        Submit
      </button>
    </form>
  )
}

export default AddProduct
