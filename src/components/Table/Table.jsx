import "./Table.css";
import { FaTrash, FaEdit } from "react-icons/fa";


export default function Table({ columns, data, actions = true }) {
  return (
    <div className="universal-table-container">
      <table className="universal-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
            {actions && <th></th>}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 1 ? "gray-row" : ""}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col] || ""}</td>
              ))}

              {actions && (
                <td className="actions">
                  <button className="icon-btn edit">
                    <FaEdit />
                  </button>
                  <button className="icon-btn delete">
                    <FaTrash />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
