import { useEffect } from "react";
import loginHandler from "../utils/loginHandler";
import { Outlet, useNavigate } from "react-router-dom";
// import Footer from "../components/common/footer/Footer";
import Sidebar from "../components/common/sidebar/sidebar";
import UserIcon from "../assets/icons/UserIcon";
import Notification from "../assets/icons/Notification";
import ArrowIcons from "../assets/icons/ArrowIcons";
export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = loginHandler();
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex md:flex-row flex-col bg-softGrey h-screen">
      {/* Side Bar */}
      <div className="md:flex hidden">
        <Sidebar />
      </div>

      {/* Main Dashboard */}
      <div className="w-full overflow-auto flex flex-col md:shadow-md">
        <div className="pt-2 p-3 bg-lightblue md:block hidden w-full h-[135px] z-10">
          <div
            className="pt-11 rounded-3xl w-full h-full flex flex-col bg-white justify-center items-center"
            style={{ boxShadow: "0px 0px 4px 0px #999999" }}
          >
            
            <div className="w-full pt-1 flex flex-row justify-end items-center pr-2 gap-3">
            <div className="w-full flex justify-start items-start pl-2">
              <ArrowIcons />
            </div>
              <Notification />
              <UserIcon />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
              </div>
            </div>
            <hr className="border-gray my-4 w-full" />
            <div className="flex pb-8 gap-4 text-gray">
              <span>DashBoard</span>
              <span>Yoga</span>
              <span>Meditation</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-lightblue overflow-auto flex-1">
          <div className="md:pt-[50px] md:p-[26px] p-[16px] pt-[1px]">
            <Outlet />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>



  );
}
