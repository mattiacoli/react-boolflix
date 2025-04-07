
import { useSearchContext } from "../contexts/SearchContext"

export default function Header() {

  const { handleSubmit, searchQuery, setSearchQuery, genres, handleSelectGenres } = useSearchContext()





  return (

    <header className="d-flex justify-content-between align-items-center px-3  p-2">

      <div className="logo text-danger fw-bolder fs-1">
        <a className="text-decoration-none text-danger" href="/">BOOTFLIX</a>
      </div>




      <div className="form-group d-flex align-item-center gap-2">



        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="form-control form-control-sm"
          name="searchbar"
          id="searchbar"
          aria-describedby="helpId"
          placeholder="Search for movies or series..."
          data-bs-theme="dark"
        />


        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleSubmit}
          data-bs-theme="dark">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>


        <div className="form-group d-flex align-items-center">
          <select
            className="form-select"
            name="genre"
            id="genre"
            onChange={handleSelectGenres}
            data-bs-theme="dark">
            <option value='/' >Select Genre</option>
            <option value='' >All</option>

            {
              genres.map(genre => (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
              ))
            }


          </select>
        </div>
      </div>


    </header>
  )
}