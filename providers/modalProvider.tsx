'use client'
import { useEffect, useState } from 'react'
import AuthModal from '@/Components/Modals/AuthModal'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  // a little trick to prevent modal from rendering on the server-side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <AuthModal />
    </>
  )
}

export default ModalProvider
