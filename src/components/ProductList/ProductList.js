import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getListProduct } from '../../redux/actions/products.action'

export default function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

   useEffect(() => {
        dispatch(getListProduct())
    }, [dispatch])

  console.log(products)
  return (
    <>
      <h2>Products</h2>
      <p>Producs</p>
      </>
  )
}