import './Investment_Form.css';
import './mq_Investment_Form.css';

function Investment_Form({investmentData, onUpdateData}) {

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
                <div className="input-group">
                    <div id="user-input">
                        <label>INITIAL INVESTMENT</label>
                        <input 
                            type="number" 
                            name="initialInvestment" 
                            placeholder="Initial Investment"
                            value={investmentData.initialInvestment}  
                            onChange={inputChangeHandler} 
                            required
                        />
                    </div>
                    <div id="user-input">
                        <label>EXPECTED RETURN</label>
                        <input 
                            type="number" 
                            name="expectedReturn" 
                            placeholder="Expected Return"
                            value={investmentData.expectedReturn}  
                            onChange={inputChangeHandler}
                            required
                        />
                    </div>
                </div>
                <div className="input-group">

                    <div id="user-input">
                        <label>ANNUAL INVESTMENT</label>
                        <input 
                            type="number" 
                            name="annualInvestment" 
                            placeholder="Annual Investment" 
                            value={investmentData.annualInvestment}
                            onChange={inputChangeHandler} 
                            required
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
                            required
                        />                     
                    </div> 
                </div>
            </div>
         
        </form>   
    )
}

export default Investment_Form