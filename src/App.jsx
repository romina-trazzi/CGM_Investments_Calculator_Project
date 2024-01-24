import Header from './components/header/Header';
import Investment_Form from './components/investments_form/Investment_Form';
import Investment_Table from './components/investments_table/Investment_Table';
import {calculateInvestmentResults } from './util/investment';
import {useState} from 'react';

function App() {
  
  // Initial DataSet
  const [investmentData, setInvestmentData] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 0
  })

  // Updating state with new investment
  function handleUpdateData(updatedInvestmentData) {

    // Update state
    setInvestmentData((prevInvestmentData) => {
      return {
        ...prevInvestmentData,
        ...updatedInvestmentData
      };
    
    });
  }
  
  return (
    <div>
      <Header />
      <Investment_Form  investmentData={investmentData} onUpdateData={handleUpdateData}/>
      <Investment_Table investmentData={investmentData} resultOfInvestment={calculateInvestmentResults(investmentData)}/>
    </div>

  )
}

export default App
