import { createContext, useContext, useState } from "react";

const SearchContext = createContext()

function SearchProvider({ children }) {

  const [searchQuery, setSearchQuery] = useState('')

  const [movies, setMovies] = useState([])

  const [series, setSeries] = useState([])

  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

  const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=it-IT&query=${searchQuery}`;

  const base_series_api_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=it-IT&query=${searchQuery}`



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


    setSearchQuery(e.target.value)

    fetch(base_series_api_url)
      .then(res => res.json())
      .then(data => {

        setSeries(data.results)
        console.log(data.results);
      })
      .catch(err => {
        console.error(err.message)
      })




  }

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, movies, setMovies, series, setSeries, handleSubmit }}>

      {children}


    </SearchContext.Provider>

  )

}


function useSearchContext() {
  const context = useContext(SearchContext)

  return context
}


export { SearchProvider, useSearchContext }





