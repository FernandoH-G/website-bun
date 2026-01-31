import { useState } from "react"

import MyPig from "@images/my-pig.png"
import Me from "@images/me.jpg"


const ImageCarousel = () => {
  const [currImg, setCurrImg] = useState<string>(Me)
  const [imageIdx, setImageIdx] = useState(0)

  function handleImgClick() {
    const images = [Me, MyPig]
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