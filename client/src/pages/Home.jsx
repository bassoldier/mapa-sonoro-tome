import { useState } from 'react'

import Layout from '../layouts/Layout'
import HeroHome from '../components/HeroHome'
import MapsGoogle from '../components/MapsGoogle'
import { LoadScript} from "@react-google-maps/api";

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <HeroHome />
        { window.google === undefined ?
          <LoadScript googleMapsApiKey='AIzaSyBuoqaV8Jt-wqWW4rY3MHySAWkv3fW5iyw'>
            <MapsGoogle id_name = "mapa_principal" />
          </LoadScript>
          :
          <MapsGoogle id_name = "mapa_principal" />
        }
      </Layout>
    </>
   
  )
}

export default Home