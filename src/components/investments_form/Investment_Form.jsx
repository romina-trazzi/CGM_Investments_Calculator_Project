import { useState } from 'react';
import './Investment_Form.css';
import { calculateInvestmentResults } from '../../util/investment';

function Investment_Form() {

    // Initial DataSet
    const [investmentData, setInvestmentData] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    })
    
    const durationParagraph = <p>Please enter a duration greater than zero.</p>
    
    // HandlerFunctions
    function inputChangeHandler (event) {
        
        const { name, value } = event.target
        
        setInvestmentData((prevInvestmentData) => {
            const updatedInvestmentData = {
                ...prevInvestmentData,
                [name]: value
            };

            // Calculate investment results with updating state
            const returnOfInvestment = calculateInvestmentResults(updatedInvestmentData);
            console.log(returnOfInvestment);

            return updatedInvestmentData;
        });
    }

    return (
        <form>
            
            <div className="formData">

                <div className="input_group">
                    <div id="user-input">
                        <label>INITIAL INVESTMENT</label>
                        <input type="number" name="initialInvestment" placeholder="Initial Investment" min="0" defaultValue={0} onChange={inputChangeHandler} />
                    </div>

                    <div id="user-input">
                        <label>EXPECTED RETURN</label>
                        <input type="number" name="expectedReturn" placeholder="Expected Return" min="0" defaultValue={0} onChange={inputChangeHandler}/>
                    </div>
                </div>

                <div className="input_group">

                    <div id="user-input">
                        <label>ANNUAL INVESTMENT</label>
                        <input type="number" name="annualInvestment" placeholder="Annual Investment" min="0" defaultValue={0} onChange={inputChangeHandler} />
                    </div>
                
                    <div id="user-input">
                        <label>DURATION</label>
                        <input type="number" name="duration" placeholder="Duration" min="0" max="20" defaultValue={0} onChange={inputChangeHandler}/>                     
                    </div>
                    
                </div>

            </div>
            
            <div className="zeroParagraph">
                {investmentData.duration === 0 ? durationParagraph : null}
            </div>
           
        </form>    
    )
}

export default Investment_Form