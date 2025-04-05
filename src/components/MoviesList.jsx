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
                  <img src={movie.poster_path?.length ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'} className=" img-fluid h-100 bordered rounded " alt={movie.title} />

                  <div className="details overlay px-3 py-1">

                    <p className="mt-2 mb-0">Titolo:</p>
                    <h5 >{movie.title}</h5>

                    <p className="mt-4 mb-0">Titolo Originale:</p>
                    <h6>{movie.original_title}</h6>

                    <ul className="list-unstyled d-flex gap-2  mt-3">
                      <li><span className="mt-4">Lingua Originale</span></li>
                      <li>
                        <ReactCountryFlag countryCode={(movie.original_language === "en" ? 'gb' : movie.original_language)} />
                      </li>
                    </ul>

                    <p className="mt-4 fw-bold mb-0" >Descrizione</p>
                    <p>{movie.overview}</p>
                    <p>
                      <b>Voto:</b>
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
                  <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} className=" img-fluid h-100 bordered rounded " alt={serie.title} />

                  <div className="details overlay px-3 py-1">

                    <p className="mt-2 mb-0">Titolo:</p>
                    <h5 >{serie.name}</h5>

                    <p className="mt-4 mb-0">Titolo Originale:</p>
                    <h6>{serie.original_name}</h6>

                    <ul className="list-unstyled d-flex gap-2  mt-3">
                      <li><span className="mt-4">Lingua Originale</span></li>
                      <li>
                        <ReactCountryFlag countryCode={(serie.original_language === "en" ? 'gb' : serie.original_language)} />
                      </li>
                    </ul>

                    <p className="mt-4 fw-bold mb-0" >Descrizione</p>
                    <p>{serie.overview}</p>
                    <p>
                      <b>Voto:</b>
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