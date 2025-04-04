import { useGlobalContext } from "../contexts/GlobalContext"
import ReactCountryFlag from "react-country-flag"

export default function MoviesList() {

  const { searchQuery, setSearchQuery, movies, handleSubmit } = useGlobalContext()

  console.log();



  return (
    <>

      <div className="container my-4">

        <header>
          <div className="form-group">
            <label htmlFor="searchbar">Search Movie</label>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="form-control"
              name="searchbar"
              id="searchbar"
              aria-describedby="helpId"
              placeholder="Search here..." />


            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={handleSubmit}

            >Search</button>
          </div>
        </header>

        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <h1>{movie.title}</h1>
              <p>Titolo Originale : {movie.original_title}</p>
              <p>lingua: <ReactCountryFlag countryCode='uk' />
              </p>
              <p>voto : {Number((movie.vote_average) / 2).toFixed()}</p>
            </li>

          ))}
        </ul>

      </div>



    </>
  )
}