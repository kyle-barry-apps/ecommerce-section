import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Lightbox from "./components/Lightbox";
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <Header />
      <MainContainer />
      <Lightbox />
    </CartProvider>
  )
}

export default App;
