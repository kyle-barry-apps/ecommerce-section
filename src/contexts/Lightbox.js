import { createContext, useState } from "react";

const LightboxContext = createContext()

export function LightboxProvider({children}) {
  const [toggleLightbox, setToggleLightbox] = useState(false)

  return (
    <LightboxContext.Provider value={{toggleLightbox, setToggleLightbox}}>
      {children}
    </LightboxContext.Provider>
  )
}

export default LightboxContext