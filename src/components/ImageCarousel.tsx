import { useState } from "react"

import MeSurprised from "@images/surprised-me-3x2.jpg"
import Me from "@images/me-3x2.jpg"


const ImageCarousel = () => {
  const [currImg, setCurrImg] = useState<string>(Me)
  const [imageIdx, setImageIdx] = useState(0)

  function handleImgClick() {
    const images = [Me, MeSurprised]
    let idx = imageIdx
    setCurrImg(images[++idx % images.length] ?? "")
    setImageIdx(idx)
  }

  return (
    <img
      onClick={() => {
        handleImgClick()
      }}
      src={currImg}
      alt="me"
      className="img-me"

    />
  )
}

export default ImageCarousel