import '../styles/globals.scss'
import ModalComponent from '../src/components/modal/ModalComponent'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [isOpen, updateOpen] = useState(false);

  return (
      <>
        <ModalComponent isOpen={isOpen} onClose={() => updateOpen(false)}/>
        <Component {...pageProps}  openModal={() => updateOpen(true)} />
      </>
  )
}

export default MyApp
