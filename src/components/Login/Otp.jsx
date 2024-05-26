import { useNavigate } from "react-router-dom";
import LoginDashBoard from "./LoginDashBoard";
import { useState, useRef } from "react";

export default function Otp() {
  const navigate = useNavigate();
  const [data, setData] = useState('');
  const otpInputs = useRef([]);
  

  const handleChange = (e, index) => {
    const value = e.target.value;
    setData(value);
    if (value.length === 1 && index < 5) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleBlur = (e, index) => {
    if (e.target.value.length === 0 && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data) {
      alert('Please enter all digits');
      return;
    }

    await localStorage.setItem('token','userLogined')
    
    navigate('/dashboard')
    
  };

  return (
    <LoginDashBoard>
      <div className="bg-white w-loginwidth h-loginheight rounded-3xl flex flex-col items-center">
        <form onSubmit={handleSubmit}>
          {/* Welcome Message */}
          <div className="relative top-[85px] left-[85px] decoration-4 font-Montserrat text-3xl">
            <span>Welcome</span>
          </div>

          {/* Email Input */}
          <div className="relative top-[126px] font-Montserrat text-xl">
            <label htmlFor="email">EmailAddress</label>
          </div>
          <div>
            <input type="email" required id="email" value={data} onChange={(e) => handleChange(e, 0)} onBlur={(e) => handleBlur(e, 0)} className="relative top-[133px] h-10 w-80 p-2 font-semibold rounded-xl border border-slate-300 text-slate-900" placeholder="abc@gmail.com" />
          </div>

          {/* OTP Inputs */}
          <div className=" relative top-[136px] font-Montserrat text-xl">
            <label htmlFor="otp">OTP</label>
          </div>
          <div id="otp" className="relative top-[145px] flex w-80 justify-center items-center pb-3">
            {[...Array(6)].map((_, index) => (
              <input key={index} required className="text-center  w-12 h-10 mx-1 border border-gray-300 rounded-xl border focus:outline-none focus:border-blue-500" type="text" id={`digit-${index + 1}`} name={`digit-${index + 1}`} maxLength={1} />
            ))}
          </div>

          {/* Submit Button */}
          <div className=" relative top-[160px] flex items-center justify-center text-sm">
            <span>Don’t have an account? <a href="/startsurvey">START THE SURVEY</a></span>
          </div>
          <div className="relative top-[170px] flex items-center justify-center">
            <button type="submit" className="p-3 px-10 flex items-center justify-center bg-yellow rounded-xl border border-slate-200 cursor-pointer">Send OTP</button>
          </div>
        </form>
      </div>
    </LoginDashBoard>
  );
}