import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import GlobalFilter from "./GlobalFilter";

export default function Table({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="w-75 mx-auto table-options">
        <div className="d-flex justify-content-between pb-2">
          <div className="d-flex align-items-center">
            Show 
            <select className='form-select mx-1 form-select-sm'
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}>
                {[10, 25, 50, 100].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                     {pageSize}
                  </option>
                ))}
            </select>
            entries
          </div>
          <div className="d-flex align-items-center">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </div>

        <div className="table-wrapper">
          <table {...getTableProps()} className="table table-hover">
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ' 🟦'}
                      </span>
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                    </tr>
                );
                })}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between table-options">
          <div>
              <strong>{rows.length} entries</strong>
          </div>

          <div className="btn-group align-items-center" role="group" aria-label="page navigation">
            <button className="btn btn-outline-secondary btn-sm" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button className="btn btn-outline-secondary btn-sm" onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>{' '}

            <span className="px-2">Page{' '} <strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</span>

            <button className="btn btn-outline-secondary btn-sm" onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>{' '}
            <button className="btn btn-outline-secondary btn-sm" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </button>{' '}
          </div>
          
          <div>
            Go to page:{' '}
            <input
              type='number'
              defaultValue={pageIndex + 1}
              onChange={e => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
              }}
              style={{ width: '50px' }}
            />
          </div>
      </div>
    </div>
  );
}