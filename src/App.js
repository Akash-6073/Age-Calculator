import './App.css';
import AgeCalc from './component/AgeCalc';
import { useState } from 'react';

function App() {
const [ans, setans] = useState("0")
  const calcage = ()=>{
    let present= new Date();
    let bd=document.getElementById("date").value;
    let p = document.getElementById('p');
    let bday = new Date(bd)
    let age=present.getFullYear() - bday.getFullYear();
    let month = present.getMonth() - bday.getMonth();
    console.log(age);
    if(bd==='')
    {
      setans(0);

    }
    else if(age<0){
          p.style.display="flex";
    }
    else{
      p.style.display="none";
    if(month>0)
    {
      setans(age);
    }
    else if (month ===0 && present.getDay()>=bday.getDay())
    {
      setans(age);

    }
    else
    {
      setans(age-1);
    }
  }
  }
  return (
    <>
    <AgeCalc onclick={calcage} ans={ans}/>
    </>
  );
}

export default App;
