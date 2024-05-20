import React from 'react'

import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import Routers from '../routers/Routers';

const layout = () => {
  return (
    <>
        <Header/>

        <main>
            <Routers></Routers>
        </main>
        <Footer/>
    </>
  )
}

export default layout