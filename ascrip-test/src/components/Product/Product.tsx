import React, { FC } from 'react'

import Image from 'next/image'
import { ProductType } from '@/resources'

const Product:FC<{product:ProductType}> = ({product}) => {

    const {title,price,category,image,} = product;
  return (
    <div>
        <img src={image} alt={title} height={'70%'} width={'100%'}/>
        <p>{title}</p>
    </div>
  )
}

export default Product