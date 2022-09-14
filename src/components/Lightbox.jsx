import { useState } from 'react'
import ImageGallery from './ImageGallery'
import product1 from '../images/image-product-1.jpg'
import product1thumbnail from '../images/image-product-1-thumbnail.jpg'
import product2 from '../images/image-product-2.jpg'
import product2thumbnail from '../images/image-product-2-thumbnail.jpg'
import product3 from '../images/image-product-3.jpg'
import product3thumbnail from '../images/image-product-3-thumbnail.jpg'
import product4 from '../images/image-product-4.jpg'
import product4thumbnail from '../images/image-product-4-thumbnail.jpg'

const Lightbox = () => {
  return (
    <section className='lightbox-container'>
      <ImageGallery lightboxStyles={true} />
    </section>
  )
}

export default Lightbox