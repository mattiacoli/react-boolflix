import { GlobalProvider } from "./contexts/GlobalContext"
import MoviesList from "./components/MoviesList"

function App() {

  return (
    <>
      <GlobalProvider>

        <MoviesList />



      </GlobalProvider>




    </>
  )
}

export default App
