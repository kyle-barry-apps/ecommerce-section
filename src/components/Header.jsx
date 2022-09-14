import React, { useEffect } from 'react'
import logo from '../images/logo.svg'
import burger from '../images/icon-menu.svg'
import cartIcon from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import productImage from '../images/image-product-1-thumbnail.jpg'
import trashIcon from '../images/icon-delete.svg'
import CartContext from '../contexts/CartContext'
import { useContext, useState } from 'react'

const Header = ({ toggleBurgerMenu, setToggleBurgerMenu }) => {
  const [toggleCartMenu, setToggleCartMenu] = useState(false)

  useEffect(() => {
    const cartDropdown = document.querySelector('#cart-dropdown')
    const cartAttribute = cartDropdown.getAttribute('data-cart')
    window.addEventListener('click', (e) => {
      const clickedAttr = e.target.getAttribute('data-cart')
      if(!clickedAttr) {
        setToggleCartMenu(false)
      }
    })
  }, [])



  const { items, setItems } = useContext(CartContext)

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

  const deleteCartItem = (item) => {
    const { id } = item
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems)
  }

  const mappedItems = items.map((item) =>  
    <div data-cart className='cart-product-flex' key={item.id}>
      <img data-cart className='cart-product-img' src={productImage} alt='product image' />
      <p data-cart className='cart-product-description'>{item.title} ${item.price}.00 x {item.quantity} <span data-cart className='cart-product-total'>${item.quantity * item.price}.00</span></p>
      <img data-cart onClick={() => deleteCartItem(item)} className='trash-icon' src={trashIcon} alt='trash icon' />      
    </div>
  )


  return (
    <nav className='navbar'>
      <div className='logo-list-container'>
        <div onClick={() => setToggleBurgerMenu(!toggleBurgerMenu)} className='burger'>
          <img src={burger} alt="menu icon" />
        </div>
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
        <div data-cart className='cart-container'>
          <img data-cart onClick={() => setToggleCartMenu(!toggleCartMenu)} className='cart-icon' src={cartIcon} alt='Cart icon' />
          <div data-cart className="number-in-cart">{getTotalQuantity()}</div>
          <div data-cart id='cart-dropdown' className={ toggleCartMenu ? 'cart-dropdown active' : 'cart-dropdown'}>
            <div data-cart className="cart-dropdown-title">Cart</div>
            <div data-cart className={items.length > 0 ? 'cart-dropdown-data-container' : 'cart-dropdown-data-container-empty'}>
              {items.length > 0 ? mappedItems : 'Your cart is empty'}
            </div>
            {items.length > 0 ? <button data-cart className='btn checkout-btn'>Checkout</button> : null}
          </div>
        </div>
        <img className='avatar' src={avatar} alt='Avatar image' />
      </div>
    </nav>
  )
}

export default Header