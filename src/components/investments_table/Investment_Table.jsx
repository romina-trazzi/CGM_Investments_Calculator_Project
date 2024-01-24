import './Investment_Table.css';
import { formatter } from '../../util/investment';

function Investment_Table({onResultOfInvestment}) {

  console.log(onResultOfInvestment);

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
        {onResultOfInvestment.map((investment) => {
          return (
            <tr>
              <td>{investment.year}</td>
              <td>{formatter.format(investment.valueEndOfYear)}</td>
              <td>{formatter.format(investment.interest)}</td>
              
              <td>{formatter.format(investment.annualInvestment)}</td>
              <td>{formatter.format(investment.valueEndOfYear + investment.annualInvestment)}</td>
            </tr>
          )
        })}
      </tbody>

    </table>
  )
}

export default Investment_Table

