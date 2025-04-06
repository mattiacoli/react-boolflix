import { SearchProvider } from "./contexts/SearchContext"
import SearchList from "./components/SearchList"

function App() {

  return (
    <>
      <SearchProvider>

        <SearchList />



      </SearchProvider>




    </>
  )
}

export default App
