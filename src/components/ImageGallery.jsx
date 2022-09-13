import { useState } from 'react'
import product1 from '../images/image-product-1.jpg'
import product1thumbnail from '../images/image-product-1-thumbnail.jpg'
import product2 from '../images/image-product-2.jpg'
import product2thumbnail from '../images/image-product-2-thumbnail.jpg'
import product3 from '../images/image-product-3.jpg'
import product3thumbnail from '../images/image-product-3-thumbnail.jpg'
import product4 from '../images/image-product-4.jpg'
import product4thumbnail from '../images/image-product-4-thumbnail.jpg'
import imageNext from '../images/icon-next.svg'
import imagePrevious from '../images/icon-previous.svg'
import iconClose from '../images/icon-close.svg'

const ImageGallery = ({ addNav }) => {
  const [showcase, setShowcase] = useState(product1)

  const handleImageClick = (product) => {
    setShowcase(product)
  }

  return (
    <section className="image-section">
      {addNav ? <img className='close-icon' src={iconClose} alt='close icon' /> : null}
      {addNav ? <div className='image-previous-container'>
        <img className='image-previous' src={imagePrevious} alt='close icon' /> 
        </div>: null} 
      <img className='main-product-image' src={showcase} alt="Main product"/>  
      {addNav ? <img className='image-next' src={imageNext} alt='close icon' /> : null}
      <div className="gallery">
        <img onClick={()=> handleImageClick(product1)} src={product1thumbnail} alt="Secondary product thumbnail" tabIndex={0} />
        <img onClick={()=> handleImageClick(product2)} src={product2thumbnail} alt="Secondary product thumbnail" tabIndex={0}/>
        <img onClick={()=> handleImageClick(product3)} src={product3thumbnail} alt="Secondary product thumbnail" tabIndex={0}/>
        <img onClick={()=> handleImageClick(product4)} src={product4thumbnail} alt="Secondary product thumbnail" tabIndex={0}/>
      </div>
    </section>
  )
}

export default ImageGallery