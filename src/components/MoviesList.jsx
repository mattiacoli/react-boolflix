import { useGlobalContext } from "../contexts/GlobalContext"
import ReactCountryFlag from "react-country-flag"

export default function MoviesList() {

  const { searchQuery, setSearchQuery, movies, series, handleSubmit } = useGlobalContext()

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
              <p>lingua originale: <ReactCountryFlag countryCode={(movie.original_language === "en" ? 'gb' : movie.original_language)} />
              </p>
              <p>voto : {Number((movie.vote_average) / 2).toFixed()}</p>
              <p>movie</p>
            </li>

          ))}
        </ul>

        <ul>
          {series.map(serie => (
            <li key={serie.id}>
              <h1>{serie.name}</h1>
              <p>Titolo Originale : {serie.original_name}</p>
              <p>lingua originale: <ReactCountryFlag countryCode={(serie.original_language === "en" ? 'gb' : serie.original_language)} />
              </p>
              <p>voto : {Number((serie.vote_average) / 2).toFixed()}</p>
              <p>Serie TV</p>
            </li>

          ))}
        </ul>

      </div>



    </>
  )
}