import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sampleProducts } from './data'
import { Product } from './types/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <h1>TS Amazon</h1>
      </header>
      <main>
        <ul>

        {
          sampleProducts.map((product: Product) => (
            <li key={product.slung}>
              <img src={product.image} alt={product.name} className='product-image'/>
              <h2>
                {product.name}
              </h2>
              <p>
                ${product.price}
              </p>
            </li>
          ))
        }
        </ul>
      </main>
      <footer>
        all right reserved
      </footer>
    </div>
  )
}

export default App
