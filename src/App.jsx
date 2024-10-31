import React, { useContext, useEffect, useState } from 'react'
import Layout from './Layout/Layout'
import Main from './components/main/Main'
import { Route, Routes } from 'react-router-dom'
import Details from './components/main/Details'
import { DATA } from './context/DataContext'

function App() {
  const {productData}=useContext(DATA)
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/details/:slug/*' element={<Details data={productData}/>} />
        </Route>
      </Routes>
  )
}

export default App
