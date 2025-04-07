import { useEffect, useState } from "react"
import { useSearchContext } from "../contexts/SearchContext"

export default function Header() {

  const { handleSubmit, searchQuery, setSearchQuery } = useSearchContext()

  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

  const [genres, setGenres] = useState([])
  const [selectGenre, setSelectGenre] = useState('')




  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then(res => res.json())
      .then(data => {
        setGenres(data.genres)
        console.log(data.genres);

      })
  }, [])


  function handleSelectGenres(e) {

    setSelectGenre(e.target.value)

  }


  return (

    <header className="d-flex justify-content-between align-items-center px-3  p-2">

      <div className="logo text-danger fw-bolder fs-1">
        <a className="text-decoration-none text-danger" href="/">BOOTFLIX</a>
      </div>


      <div className="form-group">
        <label htmlFor="Genre">Genre</label>
        <select className="custom-select" name="genre" id="genre" onChange={handleSelectGenres}>
          <option >Select one</option>

          {
            genres.map(genre => (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))
          }


        </select>
      </div>

      <div className="form-group d-flex align-item-center gap-2">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="form-control text-white "
          name="searchbar"
          id="searchbar"
          aria-describedby="helpId"
          placeholder="Search for movies or series..."
        />


        <button
          type="button"
          className="btn btn-outline-light"
          onClick={handleSubmit}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>


    </header>
  )
}