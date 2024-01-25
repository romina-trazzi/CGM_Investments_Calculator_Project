import './Investment_Table.css';
import './mq_Investment_Table.css'
import { formatter } from '../../util/investment';

function Investment_Table({investmentData, onResultOfInvestment}) {

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
          
          const totalInterest= investment.valueEndOfYear - (investment.annualInvestment * investment.year) - investmentData.initialInvestment
          const totalAmountInvested = investment.valueEndOfYear - totalInterest;
          
          return (
            <tr>
              <td>{investment.year}</td>
              <td>{formatter.format(investment.valueEndOfYear)}</td>
              <td>{formatter.format(investment.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>

    </table>
  )
}

export default Investment_Table

