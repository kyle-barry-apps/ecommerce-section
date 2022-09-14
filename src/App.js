import { useState, useContext } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Lightbox from "./components/Lightbox";
import BurgerMenu from "./components/BurgerMenu";
import { CartProvider } from './contexts/CartContext'
import LightboxContext from "./contexts/Lightbox";

function App() {
  const { toggleLightbox } = useContext(LightboxContext)
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(true)

  console.log(toggleBurgerMenu)

  return (
      <CartProvider>
        <Header toggleBurgerMenu={toggleBurgerMenu} setToggleBurgerMenu={setToggleBurgerMenu}/>
        {toggleBurgerMenu && <BurgerMenu setToggleBurgerMenu={setToggleBurgerMenu}/>}
        <MainContainer />
        {toggleLightbox && <Lightbox />}
      </CartProvider>
  )
}

export default App;
