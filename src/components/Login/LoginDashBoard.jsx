
import Logo from "../../assets/icons/Logo";
import Badal from "../../assets/icons/Badal";
import Badal1 from "../../assets/icons/Badal1";
import Badal2 from "../../assets/icons/Badal2";
import Yoga from "../../assets/icons/Yoga";

export default function LoginDashBoard(props) {
  const { children } = props;
  return (
    <>
     <div className="h-screen  flex  flex-col  ">

    
      <div className="p-2 text-primery flex justify-center items-center"> <span className="">GET YOUR PERSONALIZED YOGA RISE PLAN  ONCE YOU FINISH THE QUIZ
      </span></div>
      <div className="pt-16 flex h-screen justify-around  bg-primery">
             {/* //Image and other  */}
              
             <div className="flex flex-col items-center pt-4 gap-4"> 
          <div><Logo /> </div>
            <div className="flex justify-between w-full">
              <div className="relative top-[107px] left-[-41px] ">
              <Badal1></Badal1>
              </div>

              <div className="relative top-[-28px] left-[150px]">
              <Badal></Badal>
              </div>

              <div className="relative bottom-[-166px] left-[168px] ">
              <Badal2></Badal2>
              </div>
          
          
          
          </div> 


          <div> <Yoga /></div>
          <div className="text-white">
            <div> <span >"Yoga is the journey of the self, through</span></div>
            <div className="flex justify-center"><span> the self, to the self."</span></div>
          </div>
        </div>



              {/* login */}
        <div>
          {children}
        </div>

      </div>
      </div>

    </>



  )
}
