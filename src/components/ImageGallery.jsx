import { useState, useContext } from 'react'
import LightboxContext from '../contexts/Lightbox'
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

const ImageGallery = ({ lightboxStyles }) => {
  const [showcase, setShowcase] = useState(product1)

  const { toggleLightbox, setToggleLightbox } = useContext(LightboxContext)
  const productArray = [product1, product2, product3, product4]

  const handleNextImageClick = () => {
    const showcaseIndex = productArray.indexOf(showcase)
    if(productArray[showcaseIndex] === productArray.at(-1)) {
      setShowcase(productArray[0])
      return
    }
    setShowcase(productArray[showcaseIndex+1])
  }

  const handlePrevImageClick = () => {
    const showcaseIndex = productArray.indexOf(showcase)
    if(productArray[showcaseIndex] === productArray.at(0)) {

      setShowcase(productArray[productArray.length -1])
      return
    }
    setShowcase(productArray[showcaseIndex - 1])
  }

  const handleMainImageClick = () => {
    if(lightboxStyles) {
      return
    }
    setToggleLightbox(!toggleLightbox)
  }

  const handleImageClick = (product) => {
    setShowcase(product)
  }

  return (
    <section className="image-section">
      <div className='main-product-image-container'> 
        {lightboxStyles ? <div onClick={() => setToggleLightbox(false)} className='close-icon-container'> <img className='close-icon' src={iconClose} alt='close icon' /> </div>: null}
        <img onClick={handleMainImageClick} className={lightboxStyles ? 'main-product-image lightbox' : 'main-product-image'} src={showcase} alt="Main product"/>  
        {/* Icons to render if lightbox is on  */}
        <div onClick={handlePrevImageClick} className={lightboxStyles ? 'image-previous-container lightbox' : 'image-previous-container'}> <img className='image-previous' src={imagePrevious} alt='image previous icon' /> </div>
        <div onClick={handleNextImageClick} className={lightboxStyles ? 'image-next-container lightbox' : 'image-next-container'}> <img className='image-next' src={imageNext} alt='image next icon' /></div>
      </div>
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