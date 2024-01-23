import './Investment_Form.css'
function Investment_Form() {
  return (
    <div className="form_wrapper">
        <form className="input-group">
            <div>
                <label>INITIAL INVESTMENT</label>
                <input type="number" id="initial-investment" placeholder="Initial Investment" min="0" />
            </div>
            <div>
                <label>ANNUAL INVESTMENT</label>
                <input type="number" id="annual-investment" placeholder="Annual Investment" min="0" />
            </div>
            <div>
                <label>EXPECTED RETURN</label>
                <input type="number" id="expected-return" placeholder="Expected Return" min="0"/>
            </div>
            <div>
                <label>DURATION</label>
                <input type="number" id="duration" placeholder="Duration" min="0" max="20"/>                     
            </div>
        </form>    
    
    </div>
  )
}

export default Investment_Form