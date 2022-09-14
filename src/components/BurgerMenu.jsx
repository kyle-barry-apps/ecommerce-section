import iconClose from '../images/icon-close.svg'

function BurgerMenu({ setToggleBurgerMenu }) {
  return (
    <section className="burger-menu-dropdown">
      <img onClick={() => setToggleBurgerMenu(false)} className='close-menu-icon' src={iconClose} alt="close menu icon" />
      <ul className='menu-nav-list'>
        <li><a href='#'>Collections</a></li>
        <li><a href='#'>Men</a></li>
        <li><a href='#'>Women</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </section>
  )
}

export default BurgerMenu