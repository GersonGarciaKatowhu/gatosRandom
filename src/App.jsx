import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { refreshRandomFact, fact, isLoading } = useCatFact()
  const { urlImage } = useCatImage({ fact })

  const handleClick = () => {
    refreshRandomFact()
  }

  return (
    <main className='container'>
      <h1>"The cats are mysterious creatures with curious words."</h1>
      <section>
        <p>
          {!isLoading ? fact : 'Loading fact...'}
        </p>
        <div className='image-container'>
          {isLoading ? <p>Loading image...</p> : <img src={urlImage} />}
        </div>
        <button onClick={handleClick}>Get new fact</button>
      </section>
    </main>
  )
}

export default App
