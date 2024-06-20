import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { refreshRandomFact, fact } = useCatFact()
  const { urlImage } = useCatImage({ fact })

  const handleClick = () => {
    refreshRandomFact()
  }

  return (
    <main className='container'>
      <h1>app de gatos... </h1>
      <section>
        {fact && <p>{fact}</p>}
        {urlImage && <img src={urlImage} />}
        <button onClick={handleClick}>Get new fact</button>
      </section>
    </main>
  )
}

export default App
