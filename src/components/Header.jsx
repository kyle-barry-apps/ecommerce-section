import logo from '../images/logo.svg'
import cartIcon from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import productImage from '../images/image-product-1-thumbnail.jpg'
import trashIcon from '../images/icon-delete.svg'
import CartContext from '../contexts/CartContext'
import { useContext, useState } from 'react'

const Header = () => {
  const [toggleCartMenu, setToggleCartMenu] = useState(true)

  const { items } = useContext(CartContext)

  const getTotalQuantity = () => {
    const totalQuantity = items.reduce((acc, curr) => {
      acc += curr.quantity
      return acc
    }, 0)
    if(totalQuantity) {
      return totalQuantity
    }
    else {
      return null
    }
  }

  const mappedItems = items.map((item) =>
    <>
      <img className='cart-product-img' src={productImage} alt='product image' />
      <p className='cart-product-description'>{item.title} ${item.price}.00 x {item.quantity} <span className='cart-product-total'>${item.quantity * item.price}.00</span></p>
      <img className='trash-icon' src={trashIcon} alt='trash icon' />      
    </>
  )


  return (
    <nav className='navbar'>
      <div className='burger'>
      </div>
      <div className='logo-list-container'>
        <a href='#'><img className='logo' src={logo} alt='Sneakers logo' /></a>
        <ul className='nav-list'>
          <li><a href='#'>Collections</a></li>
          <li><a href='#'>Men</a></li>
          <li><a href='#'>Women</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
      <div className='cart-avatar-container'>
        <div className='cart-container'>
          <img onClick={() => setToggleCartMenu(!toggleCartMenu)} className='cart-icon' src={cartIcon} alt='Cart icon' />
          <div className="number-in-cart">{getTotalQuantity()}</div>
          <div className={ toggleCartMenu ? 'cart-dropdown active' : 'cart-dropdown'}>
            <div className="cart-dropdown-title"><strong>Cart</strong></div>
            <div className="cart-dropdown-data-container">
              <div className="cart-dropdown-product-details">
                {mappedItems}
              </div>
              {/* <div className="cart-dropdown-data">Your cart is empty.</div> */}
            </div>
            <button className='btn checkout-btn'>Checkout</button>
          </div>
        </div>
        <img className='avatar' src={avatar} alt='Avatar image' />
      </div>
    </nav>
  )
}

export default Header