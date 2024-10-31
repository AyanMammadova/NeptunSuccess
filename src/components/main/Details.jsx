import React from 'react'
import { useParams } from 'react-router-dom'
import Pagination from './Pagination'


function Details({data}) {
  
  const { slug } = useParams()

  const product = data && data.find(item => item.slug == slug)
  console.log(product);
  console.log(slug)
  return (
    <>
      <Pagination slug={slug}/>
    </>
  )
}

export default Details
