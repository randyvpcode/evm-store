import React from 'react'
import Card from '../Card'

export default function ProductList({ products }) {
  return (
    <>
      {products.map((val, key) => (
        <Card key={key} product={val} />
      ))}
    </>
  )
}
