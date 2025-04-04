import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {

  const [searchQuery, setSearchQuery] = useState('')

  const [movies, setMovies] = useState([])

  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

  const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery}`;



  function handleSubmit(e) {

    setSearchQuery(e.target.value)

    fetch(base_movies_api_url)
      .then(res => res.json())
      .then(data => {

        setMovies(data.results)
        console.log(data.results);
      })
      .catch(err => {
        console.error(err.message)
      })

  }

  return (
    <GlobalContext.Provider
      value={{ searchQuery, setSearchQuery, movies, setMovies, handleSubmit }}>

      {children}


    </GlobalContext.Provider>

  )

}


function useGlobalContext() {
  const context = useContext(GlobalContext)

  return context
}


export { GlobalProvider, useGlobalContext }





