import activeimg from '/src/assets/illustration-empty.svg';

const Payment = ({activediv, totalPayment, monthlyPayment, clearbtn, submitbtn, years, setYears, amount, setAmount, interest, setInterest }) => {


  return (
    
    <div className="container " >
        <div className="row lg-mt-4 p-2 d-flex mt-4 justify-content-center content_box">
           <div className="col-12 col-md-4 p-2 my_content_box">
                <div className="header_bar mt-1 d-flex justify-content-between">
                <h3 className='fs-6'>Mortage Calculator</h3>
                <p className='fs-6 pointer-on-hover' onClick={clearbtn}>Clear All</p>
                </div> 
                {/* Fisrt Input */}
                <div className="input_on">
                <p>Mortage Amount</p>
                    <div className="input-group">
            <span className="input-group-text"><i className="fas fa-dollar-sign"></i></span>
            <input type="text" className="form-control pointer-on-hover" placeholder="Amount" 
            value={amount} onChange={(e) => setAmount(e.target.value)}  />
              </div>     
                </div>
                 {/* Second Input */} 
                <div className="header_bar mt-1 d-md-flex gap-3 justify-content-between second_input">
                <div className="input_on">
                <p>Mortage Terms</p>
                <div className="input-group">
                  <input type="text" className="form-control pointer-on-hover" placeholder="Years" 
                   value={years} onChange={(e) => setYears(e.target.value)}  />
                
               <span className="input-group-text">Years</span>
              </div> 
                </div>
                 <div className="input_on">
                <p>Interest Rate</p>
                <div className="input-group">
                  <input type="text" className="form-control pointer-on-hover " placeholder="%"  
                   value={interest} onChange={(e) => setInterest(e.target.value)}  />
                  
               <span className="input-group-text">%</span>
              </div>
                </div>
                </div>
                 {/* Third Input */}
        <div className="formcheck_container">
          <p>Mortage Type</p>     
      <div className="form-check ">
  <input className="form-check-input pointer-on-hover " type="radio" name="radioDefault" id="radioDefault1"/>
  <label className="form-check-label" htmlFor="radioDefault1">
   Repayment 
  </label>
</div>
<div className="form-check mt-1 ">
  <input className="form-check-input pointer-on-hover" type="radio" name="radioDefault" id="radioDefault2" />
  <label className="form-check-label " htmlFor="radioDefault2">
    Interest Only
  </label>
</div>
</div>
<div className="row calculate-btn w-75 mx-auto mt-2 mb-2">
  <input className="btn btn-primary pointer-on-hover" type="submit" value="Submit" onClick={submitbtn}>
  </input>
</div>

           </div>
           <div className="col-12 col-md-4  text-center bg-dark ">
            <div className={`activestate  ${activediv ? 'active-div' : 'inactive-div'}`}>
            <div className="img_box mx-auto mt-5">
                  <img src={activeimg}  /> 
            </div>
            <div className="text_area">
                <h6 className='text-white'>Result Shown Here</h6>
                <p>Complete the form and Click "calculate Repayments" to see what is your monthly repayment would be.</p>
            </div> 
            </div>
          {/* RESULT TO SHOW HERE */}
          <div className= {`row  p-1 text-white text-start ${!activediv ? 'active-div' : 'inactive-div'}`} >
            <div className="col-12 mt-2 border-danger result_box">
              <h6>Your Results</h6>
              <p >Your Resut are shwon below based on the information 
              you provided to adjust the results. edit the form and
              click "calculate repayment" again. </p>
            </div>
            <div className="row">
              <div className="col-12 p-3 result_amount_box ">
                <p>your Montly Repayments</p>
                <div className="amount_bold p-1 mb-4">
                  <h1>${monthlyPayment}</h1>
                </div>
                <p>total your will repay over the term</p>
                <div className="overterm_amount">
                  <h5>${totalPayment}</h5>
                </div>

              </div>
            </div>


          </div>
           {/* END OF RESULT SHOW */}
           </div>
        </div>
      
    </div>
 
  )
}

export default Payment
 