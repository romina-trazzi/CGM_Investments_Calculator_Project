import Header from './components/header/Header';
import Investment_Form from './components/investments_form/Investment_Form';
import Investment_Table from './components/investments_table/Investment_Table';
import {calculateInvestmentResults } from './util/investment';
import {useState} from 'react';

function App() {

  const durationParagraph = <p className="zeroParagraph">Please enter a duration greater than zero.</p>
  
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
      <Investment_Form investmentData={investmentData} onUpdateData={handleUpdateData}/>
        {investmentData.duration === 0 ? durationParagraph : 
          <Investment_Table investmentData={investmentData} onResultOfInvestment={calculateInvestmentResults(investmentData)}/>
        }
    </div>

  )
}

export default App
