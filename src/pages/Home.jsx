import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import SearchList from "../components/SearchList"
import { useSearchContext } from "../contexts/SearchContext";

export default function Home() {

  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

  const [popularMovies, setPopularMovies] = useState([])

  const [popularSeries, setPopularSeries] = useState([])

  const { movies = [] } = useSearchContext()


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=it_IT&page=1';`)
      .then(res => res.json())
      .then(data => {
        setPopularMovies(data.results)
      })


    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=it_IT&page=1';`)
      .then(res => res.json())
      .then(data => {
        setPopularSeries(data.results)
      })



  }, [])


  return movies.length > 0 ? (<SearchList />) : (
    <>
      <main>
        <div className="container">

          <h2 className="mb-4 mt-5"> Popular Movies</h2>

          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2">

            {popularMovies.splice(0, 8).map(movie => (
              <div key={movie.id} className="col mb-4">
                <div className="card h-100 " >
                  <img src={movie.poster_path?.length ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'} className=" img-fluid h-100 w-100 bordered rounded " alt={movie.title} />

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

                    <p>
                      <b>Voto:</b>
                      {"★".repeat(Number((movie.vote_average) / 2).toFixed()) +
                        "☆".repeat(5 - Number((movie.vote_average) / 2).toFixed())}
                    </p>
                    <p className="mt-4 fw-bold mb-0" >Descrizione</p>
                    <p>{movie.overview}</p>

                  </div>
                </div>
              </div>
            ))}
          </div>


          <h2 className="mb-4 mt-5"> Popular Tv Shows</h2>

          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2">

            {popularSeries.splice(0, 8).map(serie => (
              <div key={serie.id} className="col mb-4">
                <div className="card h-100 " >
                  <img src={serie.poster_path?.length ? `https://image.tmdb.org/t/p/w342/${serie.poster_path}` : 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'} className=" img-fluid h-100 w-100 bordered rounded " alt={serie.title} />

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

                    <p>
                      <b>Voto:</b>
                      {"★".repeat(Number((serie.vote_average) / 2).toFixed()) +
                        "☆".repeat(5 - Number((serie.vote_average) / 2).toFixed())}
                    </p>
                    <p className="mt-4 fw-bold mb-0" >Descrizione</p>
                    <p>{serie.overview}</p>

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