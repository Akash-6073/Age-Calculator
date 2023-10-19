import React from 'react'
import '../style/style.css'
export default function AgeCalc(props) {
  return (
    <div>
      <div className="main mw1">
        <h1 style={{textAlign:"center"}}>TASK - V</h1>
        <div className="container">
         <h2>Age Calculator</h2>
         <p><b>Enter your date of birth</b></p>
         <p style={{color:"red",display:'none'} } id='p'>Date of birth needs to be earlier than the age at date.</p>
         <input type="date" id='date' />
         <button className='btn btn-primary my-3' onClick={props.onclick}>Calculate Age</button>
         <h4>Your are <span style={{fontSize:"35px"}}>{props.ans}</span> years old</h4>
         </div>
         <div className="foot">
            Copyright &copy; All rights Reserved - Akash 21BCE5812
         </div>
      </div>
    </div>
  )
}
