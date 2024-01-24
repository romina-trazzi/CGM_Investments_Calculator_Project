
import './Investment_Form.css';

function Investment_Form({investmentData, onUpdateData}) {

    const durationParagraph = <p>Please enter a duration greater than zero.</p>
    
    // HandlerFunction
    function inputChangeHandler (event) {
        const { name, value } = event.target

        // Update DataSet
        const updatedInvestmentData = {
            ...investmentData,
            [name]: +value
        };
       
        // Bottom-up prop from here to parent
        onUpdateData(updatedInvestmentData);
    };

    return (
        <form>
            
            <div className="formData">

                <div className="input_group">
                    <div id="user-input">
                        <label>INITIAL INVESTMENT</label>
                        <input 
                            type="number" 
                            name="initialInvestment" 
                            placeholder="Initial Investment"
                            value={investmentData.initialInvestment}
                            min="0" 
                            onChange={inputChangeHandler} 
                        />
                    </div>

                    <div id="user-input">
                        <label>EXPECTED RETURN</label>
                        <input 
                            type="number" 
                            name="expectedReturn" 
                            placeholder="Expected Return"
                            value={investmentData.expectedReturn} 
                            min="0" 
                            onChange={inputChangeHandler}
                        />
                    </div>
                </div>

                <div className="input_group">

                    <div id="user-input">
                        <label>ANNUAL INVESTMENT</label>
                        <input 
                            type="number" 
                            name="annualInvestment" 
                            placeholder="Annual Investment" 
                            value={investmentData.annualInvestment}
                            min="0" 
                            onChange={inputChangeHandler} 
                        />
                    </div>
                
                    <div id="user-input">
                        <label>DURATION</label>
                        <input 
                            type="number" 
                            name="duration" 
                            placeholder="Duration" 
                            value={investmentData.duration}
                            min="0" 
                            max="20"  
                            onChange={inputChangeHandler}
                        />                     
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