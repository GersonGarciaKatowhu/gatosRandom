import { useEffect, useState } from 'react'

const CAT_ENDPOINT_IMAGE_URL = firstWords => `https://cataas.com/cat/says/${firstWords}`

export function useCatImage ({ fact }) {
  const [urlImage, setUrlImage] = useState('')
  useEffect(() => {
    if (!fact) return
    const firstThreeWord = fact.split(' ').slice(0, 3).join(' ')
    setUrlImage(CAT_ENDPOINT_IMAGE_URL(firstThreeWord))
  }, [fact])
  return { urlImage }
}
