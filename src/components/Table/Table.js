import { useTable, useGlobalFilter } from "react-table";
import GlobalFilter from "./GlobalFilter";

export default function Table({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter // The useFilter Hook provides a way to set the filter
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter // Adding the useFilters Hook to the table
  );

  const { globalFilter } = state;

  return (
    <div className="w-75 mx-auto">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

        <table {...getTableProps()} id="employees-table">
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
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
  );
}