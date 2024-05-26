import { useState } from "react";
import LoginDashBoard from "./LoginDashBoard";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate=useNavigate()
  const [data,setdata]=useState('');
  const handleChange = (e) => {
    setdata(e.target.value);
  };
   const FormSubmit=async()=>{
      if(!data){
    return  alert('Email Is required');
      }
      navigate('/sentotp')
   }

  return (

    <LoginDashBoard>
         <div className="bg-white w-loginwidth h-loginheight rounded-3xl flex flex-col items-center">
      <form  onSubmit={FormSubmit}>
        <div className="relative top-[85px] left-[85px] decoration-4 font-Montserrat text-3xl">
          <span>WelCome</span>
        </div>
       
          <div className="relative top-[126px]   font-Montserrat text-xl">
            <span>EmailAddress</span>
          </div>
          <div>
            <input type="email" value={data} onChange={handleChange} className="relative top-[133px] h-10 w-80 p-2 font-semibold rounded-xl border border-slate-300 text-slate-900" placeholder="abc@gmail.com" />
          </div>
          <div className="pt-[105px] relative top-[160px] flex items-center justify-center text-sm">
            <span>
              Don’t have an account?</span> <span > START THE SURVEY</span>

          </div>
          <div className="relative top-[170px] flex items-center justify-center fontsize">
            <button type="submit" className="p-3 px-10 flex  items-center justify-center bg-yellow rounded-xl  border border-slate-200"> Send Otp</button>
          </div>
        </form>
      </div>


    </LoginDashBoard>

  )
}
