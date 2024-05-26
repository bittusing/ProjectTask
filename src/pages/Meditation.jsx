import Calanderdate from "../assets/icons/Calanderdate";
import Yogalady from "../assets/icons/Yogalady";
import Yoga1 from "../assets/icons/Yoga1";
import YogaFor from "../assets/DashboardPageImage/Yoga";
import { Asanas1, Asanas2, Asanas3, Asanas4 } from "../assets/DashboardPageImage/Asanas.jsx"
import { Meditation1, Meditation2, Meditation3, Meditation4, Meditation5 } from "../assets/DashboardPageImage/Meditation.jsx"

export default function Meditation() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="p-4 w-[420px] flex flex-col h-[250px]  rounded-xl  border justify-center items-center gap-4 bg-white">
        <div className="flex ">
          <Calanderdate />
        </div>
        <div className="w-full flex flex-row gap-3">
          <div> <Yogalady /> </div>
          <div><Yoga1 /></div>
          <div className="relative top-14 h-3 left-[-97px]">  <button type="submit" className="p-3 px-10 w-[244px] h-[53px] flex  items-center justify-center
               bg-yellow rounded-xl  border border-slate-200"> Click To Start </button>
          </div>
        </div>

      </div>


      <div className="flex flex-col gap-4">

        <div className="font-bold flex flex-col">
          <span>
            Yoga For
          </span>
          <YogaFor />
        </div>

        <div className="font-bold flex flex-col">
          <span>
            Recommended Asanas
          </span>
          <div className="flex flex-row pt-3 gap-4">

            <Asanas1></Asanas1>
            <Asanas2></Asanas2>

            <Asanas3></Asanas3>

            <Asanas4></Asanas4>
          </div>



        </div>


        <div className="font-bold flex flex-col">
          <span>
            Meditation
          </span>
          <div className="flex flex-row pt-3 gap-4">

            <Meditation1></Meditation1>
            <Meditation2></Meditation2>

            <Meditation3></Meditation3>

            <Meditation4></Meditation4>
            <Meditation5></Meditation5>
          </div>
        </div>


       





      </div>
    </div>
  )
}
