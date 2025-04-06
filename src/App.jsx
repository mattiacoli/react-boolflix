import { SearchProvider } from "./contexts/SearchContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"


function App() {

  return (
    <>


      <SearchProvider>

        <BrowserRouter>
          <Routes>


            <Route element={<DefaultLayout />}>

              <Route path="/" Component={Home} />

            </Route>


          </Routes>
        </BrowserRouter>
      </SearchProvider>




    </>
  )
}

export default App
