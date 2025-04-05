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

          <div className="row row-cols-lg-6 row-cols-md-3 row-cols-1">

            {movies.map(movie => (
              <div key={movie.id} className="col mb-3">
                <div className="card h-100">
                  <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} className="card-img-top" alt={movie.title} style={{ maxHeight: "300px" }} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p>
                      voto :
                      {"★".repeat(Number((movie.vote_average) / 2).toFixed()) +
                        "☆".repeat(5 - Number((movie.vote_average) / 2).toFixed())}
                    </p>
                    <p>movie</p>
                  </div>
                </div>
              </div>
            ))}

            {series.map(serie => (
              <div key={serie.id} className="col">
                <div className="card">
                  <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} className="card-img-top" alt={serie.name} />
                  <div className="card-body">
                    <h5 className="card-title">{serie.name}</h5>
                    <p>
                      voto :
                      {"★".repeat(Number((serie.vote_average) / 2).toFixed()) +
                        "☆".repeat(5 - Number((serie.vote_average) / 2).toFixed())}
                    </p>
                    <p>serie</p>
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