import { useState} from "react"
import Payment from "./payment"

const App = () => {
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [interest, setInterest] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [Interest, setTotalInterest] = useState(null);
  const [activediv, setActiveDiv] = useState(true);

  const calculateMortgage = (principal, annualInterestRate, years) => {
    const n = years * 12; // total number of monthly payments
    const r = annualInterestRate / 100 / 12; // monthly interest rate

    if (r === 0) {
      // No interest case
      return principal / n;
    }

    const monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return monthlyPayment;
  };

  const handleSubmit = () => {
    // Convert inputs to numbers
    const principal = parseFloat(amount);
    const annualInterestRate = parseFloat(interest);
    const loanYears = parseFloat(years);

    // Validate inputs
    if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(loanYears)) {
      alert("Please enter valid numbers for all fields");
      return;
    }

    // Calculate mortgage
    const monthly = calculateMortgage(principal, annualInterestRate, loanYears);
    const totalMonths = loanYears * 12;
    const total = monthly * totalMonths;
    const totalInt = total - principal;

    // Set results
    setMonthlyPayment(Number(monthly.toFixed(2)).toLocaleString());
    setTotalPayment(Number(total.toFixed(2)).toLocaleString());
    setTotalInterest(totalInt.toFixed(2));
    setActiveDiv(false);
  };

  const clearAll = () => {
    setAmount('');
    setYears('');
    setInterest('');
    setMonthlyPayment(null);
    setTotalPayment(null);
    setTotalInterest(null);
    setActiveDiv(true);
  };


  return (
    <div>
      <Payment clearbtn={clearAll} 
       submitbtn={handleSubmit}
       amount ={amount}
       setAmount={setAmount}
       interest={interest}
       setInterest ={setInterest}
       years={years}       // Pass the current state to Payment
        setYears={setYears} // Pass state updater to Payment (if needed)
// Set Actuve State OF a Div
      activediv ={activediv}
      totalPayment={totalPayment}
      monthlyPayment={monthlyPayment}
      
      />
      
    </div>
  )
}


export default App

