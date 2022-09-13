import { useContext, useState } from 'react'
import cartIcon from '../images/icon-cart.svg'
import addIcon from '../images/icon-plus.svg'
import deleteIcon from '../images/icon-minus.svg'
import CartContext from '../contexts/CartContext'

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(0)
  const { items, setItems } = useContext(CartContext)

  const handleAddQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleMinusQuantity = () => {
    if(quantity > 0) {
      setQuantity(quantity - 1)
    } else {
      return
    }
  }

  const handleAddToCart = () => {
    if(quantity) {
      const newItem = {id: 0, quantity, title: 'Fall Limited Edition Sneakers', price: 125}
      let newItemInItems = false
      const newItemsArray = []

      items.forEach((item) => {
        if(item.id === newItem.id) {
          item.quantity += newItem.quantity
          newItemsArray.push(item)
          newItemInItems = true
        } else {
          newItemsArray.push(item)
        }
      })

      if (!newItemInItems) {
        newItemsArray.push(newItem)
      }
      
      setItems(newItemsArray)
      setQuantity(0)
    }
  }

  return (
    <section className="product-info">
      <h3 className='company-title'>Sneaker Company</h3>
      <h1 className='product-title'>Fall Limited Edition Sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <div className="pricing">
        <div className="price-with-discount-container">
          <h2 className="new-price">$125.00</h2>
          <span className="discount">50%</span>
        </div>
        <span className="original-price">$250.00</span>
      </div>
      <div className="cart-buttons-container">
        <div className="quantity">
          <button onClick={handleMinusQuantity} className="subtract-quantity"><img src={deleteIcon} alt="minus quantity" /></button>
          <span className="selected-quantity">{quantity.toString()}</span>
          <button onClick={handleAddQuantity} className="add-quantity"><img src={addIcon} alt="add quantityt"/></button>
        </div>
        <button onClick={handleAddToCart} className='btn'><img src={cartIcon} alt='cart icon'/>Add to cart</button>
      </div>
    </section>
  )
}

export default ProductInfo