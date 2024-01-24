import './Investment_Table.css';
import { formatter } from '../../util/investment';

function Investment_Table({investmentData, resultOfInvestment}) {

    
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
          <td>{investmentData.duration}</td>
          <td>{investmentData.initialInvestment}</td>
          <td>{investmentData.expectedReturn}</td>
          <td>Formula</td>
          <td>{investmentData.annualInvestment}</td> 
        </tr>
      </tbody>

    </table>
  )
}

export default Investment_Table