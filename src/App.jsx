// import React, { useContext, useEffect, useState } from 'react'
import Layout from './Layout/Layout'
import Main from './components/main/Main'
import { Route, Routes, useLocation } from 'react-router-dom'
import Details from './components/main/Details'
import Error from './components/Error'
import ProductById from './components/main/ProductById'
import ModalPage from './components/main/ModalPage'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }, [pathname])
  return (
    <>
    <Helmet>
      <title>Neptun</title>
    </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/:subslug/:subname/:subid' element={<Details />} />
          <Route path='/:name/:proid' element={<ProductById />} />
          <Route path='/basket' element={<ModalPage />} />

        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
