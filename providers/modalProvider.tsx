'use client'
import { useEffect, useState } from 'react'
import AuthModal from '@/Components/Modals/AuthModal'
import UploadModal from '@/Components/Modals/UploadModal';

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
      <UploadModal/>
    </>
  )
}

export default ModalProvider
