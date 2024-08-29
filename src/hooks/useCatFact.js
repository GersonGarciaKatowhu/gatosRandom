import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const refreshRandomFact = () => {
    setFact(null)
    setIsLoading(true)
    getRandomFact().then(newFact => {
      setFact(newFact)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    })
  }
  useEffect(refreshRandomFact, [])
  return { refreshRandomFact, fact, isLoading }
}
