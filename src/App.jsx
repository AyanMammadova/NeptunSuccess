// import React, { useContext, useEffect, useState } from 'react'
import Layout from './Layout/Layout'
import Main from './components/main/Main'
import { Route, Routes } from 'react-router-dom'
import Details from './components/main/Details'
import Error from './components/Error'
import ProductById from './components/main/ProductById'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/:subslug/:subname/:subid' element={<Details/>} />
          <Route path='/:name/:proid' element={<ProductById/>} />

        </Route>
        <Route path='*' element={<Error/>} />
      </Routes>
  )
}

export default App
