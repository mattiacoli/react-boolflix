import { useGlobalContext } from "../contexts/GlobalContext"

export default function MoviesList() {

  const { searchQuery, setSearchQuery, movies, handleSubmit } = useGlobalContext()


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

      </div>



    </>
  )
}