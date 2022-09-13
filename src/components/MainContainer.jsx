import ImageGallery from "./ImageGallery"
import ProductInfo from "./ProductInfo"

const MainContainer = () => {
  return (
    <main className="main-container">
      <ImageGallery addNav={false}/>
      <ProductInfo />
    </main>
  )
}

export default MainContainer