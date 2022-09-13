import product1 from '../images/image-product-1.jpg'
import product1thumbnail from '../images/image-product-1-thumbnail.jpg'
import product2 from '../images/image-product-2.jpg'
import product2thumbnail from '../images/image-product-2-thumbnail.jpg'
import product3 from '../images/image-product-3.jpg'
import product3thumbnail from '../images/image-product-3-thumbnail.jpg'
import product4 from '../images/image-product-4.jpg'
import product4thumbnail from '../images/image-product-4-thumbnail.jpg'

const ImageGallery = () => {
  return (
    <section className="image-section">
      <img className='main-product-image' src={product1} alt="Main product"/>
      <div className="gallery">
        <img src={product1thumbnail} alt="Secondary product thumbnail" tabIndex={0} />
        <img src={product2thumbnail} alt="Secondary product thumbnail" tabIndex={0}/>
        <img src={product3thumbnail} alt="Secondary product thumbnail" tabIndex={0}/>
        <img src={product4thumbnail} alt="Secondary product thumbnail" tabIndex={0}/>
      </div>
    </section>
  )
}

export default ImageGallery