import { useState } from 'react'

import Layout from '../layouts/Layout'
import MapsGoogle from '../components/MapsGoogle'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        
        <MapsGoogle />
        
        <div className="descripcion-map">
          <h1>Tomé Sonoro</h1>
          <h2>
            Experimenta los rincones de Tomé a través de tus oídos.
          </h2>
          
          <button className="home-button" onClick={() => setCount(count + 1)}>
            Click Me
          </button>
        </div>
      </Layout>
      
    </>
   
  )
}

export default Home