import { createContext, useState } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {

  const [query, setQuery] = useState()
  const [movies, setMovies] = useState([])

  const apiKey = '795776e0a1fb01c1e5b7968acb3d6b9c'



  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
    .then(res => res.json())
    .then(data => {

      setMovies(data)
      console.log(movies);
    })
    .catch(err => {
      console.error(err.message)
    })

  return (
    <GlobalContext.Provider
      value={{ query, setQuery, movies, setMovies }}>

      {children}


    </GlobalContext.Provider>

  )

}


