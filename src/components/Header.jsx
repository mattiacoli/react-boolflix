import { useGlobalContext } from "../contexts/GlobalContext"




export default function Header() {

  const { handleSubmit, searchQuery, setSearchQuery } = useGlobalContext()

  return (

    <header className="d-flex justify-content-between align-items-center px-3  p-2">

      <div className="logo text-danger fw-bolder fs-1">
        BOOLFLIX
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
          Search
        </button>
      </div>


    </header>
  )
}