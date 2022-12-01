function GlobalFilter({filter, setFilter}) {

    return (
        <input  className="mb-2"
                value={filter || ''}
                onChange={e => setFilter(e.target.value)}
                placeholder={"Search ..."} />
  )}
  
  export default GlobalFilter;