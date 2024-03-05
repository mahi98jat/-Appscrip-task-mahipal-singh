import React, { FC } from 'react'

import { Product } from '..';
import { ProductType } from '@/resources'
import styles from './ProductList.module.css';

const ProductList:FC<{data:ProductType[]}> = ({data}) => {
  return (
    <div className={styles.productList} >{
        data.map((product)=><Product key={product.id} product={product}/>)
    }</div>
  )
}

export default ProductList