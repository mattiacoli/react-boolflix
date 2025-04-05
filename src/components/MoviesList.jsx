import { useGlobalContext } from "../contexts/GlobalContext"
import ReactCountryFlag from "react-country-flag"
import Header from "./Header"

export default function MoviesList() {

  const { movies, series } = useGlobalContext()

  return (
    <>


      <Header />


      {/* movie */}

      <main className="searched_movie">

        <div className="container my-4">

          <h2 className="mb-4 mt-5">MOVIES</h2>

          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1">

            {movies.map(movie => (
              <div key={movie.id} className="col mb-4">
                <div className="card h-100 " >
                  <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} className=" img-fluid h-100 bordered rounded " alt={movie.title} />

                  <div className="details overlay px-3 py-1">

                    <h5 className="mt-2">{movie.title}</h5>
                    <h6>{movie.original_title}</h6>

                    <ReactCountryFlag countryCode={(movie.original_language === "en" ? 'gb' : movie.original_language)} />

                    <p className="mt-2">{movie.overview}</p>
                    <p> voto :
                      {"★".repeat(Number((movie.vote_average) / 2).toFixed()) +
                        "☆".repeat(5 - Number((movie.vote_average) / 2).toFixed())}
                    </p>


                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-5 mb-3">TV SERIES</h2>


          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1">
            {series.map(serie => (
              <div key={serie.id} className="col mb-4">
                <div className="card h-100 " >
                  <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} className=" img-fluid h-100 bordered rounded " alt={serie.name} />

                  <div className="details overlay px-3 py-1">

                    <h5 className="mt-2">{serie.name}</h5>
                    <h6>{serie.original_name}</h6>

                    <ReactCountryFlag countryCode={(serie.original_language === "en" ? 'gb' : serie.original_language)} />

                    <p className="mt-2">{serie.overview}</p>
                    <p> voto :
                      {"★".repeat(Number((serie.vote_average) / 2).toFixed()) +
                        "☆".repeat(5 - Number((serie.vote_average) / 2).toFixed())}
                    </p>


                  </div>
                </div>
              </div>
            ))}
          </div>




        </div>

      </main>



    </>
  )
}