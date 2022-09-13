import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <Header />
      <MainContainer />
    </CartProvider>
  )
}

export default App;
