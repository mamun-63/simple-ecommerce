import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
import AddProduct from './components/AddProduct'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/about' component={About} />
          <Route path='/products' component={ProductScreen} />
          <Route path='/add' component={AddProduct} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
