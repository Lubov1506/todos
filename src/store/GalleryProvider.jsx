import { createContext, useState } from "react"

export const GalleryContext = createContext()
export const GalleryProvider = ({ children }) => {
  const [imgs, setImgs] = useState([])
  const [chosenPhoto, setChosenPhoto] = useState(null)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleChosePhoto = (photo) => {
    setIsOpenModal(true)
    setChosenPhoto(photo)
  }
  const contextValues = {
    imgs,
    setImgs,
    chosenPhoto,
    setChosenPhoto,
    handleChosePhoto,
    isOpenModal,
    setIsOpenModal,
  }
  return (
    <GalleryContext.Provider value={contextValues}>
      {children}
    </GalleryContext.Provider>
  )
}
