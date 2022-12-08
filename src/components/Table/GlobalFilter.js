function GlobalFilter({filter, setFilter}) {

return (
    <>
        <label className="form-label mb-0">Search:</label>
        <input  className="ms-2 form-control form-control-sm"
                value={filter || ''}
                onChange={e => setFilter(e.target.value)}
                placeholder={"name, department, city ..."} />
    </>
  )}
  
  export default GlobalFilter;