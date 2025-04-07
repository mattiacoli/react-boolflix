import { createContext, useContext, useState, useEffect } from "react";

const SearchContext = createContext()

function SearchProvider({ children }) {

  const [searchQuery, setSearchQuery] = useState('')

  const [movies, setMovies] = useState([])

  const [series, setSeries] = useState([])

  const [genres, setGenres] = useState([])

  const [selectGenre, setSelectGenre] = useState('')

  const [actors, setActors] = useState([])

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


    function getActors(movieID) {
      fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => {
          const actorNames = data.cast.splice(0, 5).map(actor => actor.name);
          setActors(actorNames);
          console.log(actorNames);
        })
        .catch(err => {
          console.error(err.message);
        });
    }


  }


  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then(res => res.json())
      .then(data => {
        setGenres(data.genres)

      })
  }, [])


  function handleSelectGenres(e) {

    setSelectGenre(e.target.value)

  }

  function filterMoviesByGenre() {
    if (!selectGenre) return movies;
    return movies.filter(movie => movie.genre_ids.includes(Number(selectGenre)));
  }


  return (
    <SearchContext.Provider
      value={{
        searchQuery, setSearchQuery,
        movies, setMovies,
        series, setSeries,
        genres, setGenres,
        selectGenre, setSelectGenre,
        handleSubmit, handleSelectGenres,
        filterMoviesByGenre, getActors
      }}>

      {children}


    </SearchContext.Provider>

  )

}


function useSearchContext() {
  const context = useContext(SearchContext)

  return context
}


export { SearchProvider, useSearchContext }





