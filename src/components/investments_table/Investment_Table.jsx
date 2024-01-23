import './Investment_Table.css'

function Investment_Table({year}) {
  return (
    <table id ="result"> 

      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interested (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{year}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>

    </table>
  )
}

export default Investment_Table