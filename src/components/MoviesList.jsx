import { useGlobalContext } from "../contexts/GlobalContext"
import ReactCountryFlag from "react-country-flag"
import Header from "./Header"

export default function MoviesList() {

  const { movies, series } = useGlobalContext()

  return (
    <>


      <Header />


      {/* movie */}

      <div className="container my-4">
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <h1>{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="" />
              <p>Titolo Originale : {movie.original_title}</p>
              <p>lingua originale: <ReactCountryFlag countryCode={(movie.original_language === "en" ? 'gb' : movie.original_language)} />
              </p>

              <p>
                voto :
                {"★".repeat(Number((movie.vote_average) / 2).toFixed()) +
                  "☆".repeat(5 - Number((movie.vote_average) / 2).toFixed())}
              </p>

              <p>movie</p>
            </li>

          ))}
        </ul>

        {/* serie Tv */}
        <ul>
          {series.map(serie => (
            <li key={serie.id}>
              <h1>{serie.name}</h1>
              <img src={` https://image.tmdb.org/t/p/w342/${serie.poster_path}`} alt="" />
              <p>Titolo Originale : {serie.original_name}</p>
              <p>lingua originale: <ReactCountryFlag countryCode={(serie.original_language === "en" ? 'gb' : serie.original_language)} />
              </p>
              <p>
                voto :
                {"★".repeat(Number((serie.vote_average) / 2).toFixed()) +
                  "☆".repeat(5 - Number((serie.vote_average) / 2).toFixed())}
              </p>
              <p>Serie TV</p>

            </li>

          ))}
        </ul>

      </div>



    </>
  )
}