import './Investment_Table.css';
import { formatter } from '../../util/investment';

function Investment_Table({returnOfInvestment}) {

  console.log(returnOfInvestment.duration);
  
  // for (const investment of returnOfInvestment) {
    
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
          <td>{returnOfInvestment.duration}</td>
          <td>{returnOfInvestment.initialInvestment}</td>
          <td>{returnOfInvestment.expectedReturn}</td>
          <td>Formula</td>
          <td>{returnOfInvestment.annualInvestment}</td> 
        </tr>
      </tbody>

    </table>
  )
}

export default Investment_Table