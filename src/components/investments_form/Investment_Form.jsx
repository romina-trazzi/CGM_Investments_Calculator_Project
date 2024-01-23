import './Investment_Form.css'
function Investment_Form() {
  return (
    <form>
        
        <div className="input_group">
            <div id="user-input">
                <label>INITIAL INVESTMENT</label>
                <input type="number" id="initial-investment" placeholder="Initial Investment" min="0" />
            </div>
            <div id="user-input">
                <label>ANNUAL INVESTMENT</label>
                <input type="number" id="annual-investment" placeholder="Annual Investment" min="0" />
            </div>
        </div>

        <div className="input_group">
            <div id="user-input">
                <label>EXPECTED RETURN</label>
                <input type="number" id="expected-return" placeholder="Expected Return" min="0"/>
            </div>
            <div id="user-input">
                <label>DURATION</label>
                <input type="number" id="duration" placeholder="Duration" min="0" max="20"/>                     
            </div>
        </div>
    </form>    
  )
}

export default Investment_Form