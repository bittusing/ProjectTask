
import { Link, useNavigate } from "react-router-dom";
import { Dashboard ,LogoutIcon} from "../../../assets/NavbarIcons/index";
// import Dashboardlogo from "../../../assets/icons/Dashboardlogo";
import navBarLinksData from "../../../utils/JSON/navBarLinks";
import Logo from "../../../assets/Logo/Logo.png";
export default function Sidebar({ onlyMenu = false }) {
    const navigate=useNavigate();
  const iconRenderer = (iconName) => {
    switch (iconName) {
      case "Dashboardicon":
        return <Dashboard />;
        case "LogoutIcon":
          return <LogoutIcon />;

      default:
        return null;
    }
  };
  
  const Logout=async()=>{
      await localStorage.removeItem('token');
      navigate('/')
  }

  return (
    <>
      <nav>
        <div className="min-w-[266px] h-full flex flex-col justify-between bg-white overflow-auto shadow-light ">
          <div className="flex flex-col gap-14">
            {!onlyMenu && (
              <div className="flex justify-center p-12 pt-1 pb-0">
                {/* <Dashboardlogo  /> */}
                <img src={`${Logo}`} style={{ height: "122px" }} />
              </div>
            )}
            <div className="flex flex-col justify-center pr-2">
              
              {navBarLinksData?.map((links) => {
                return (
                  <div className=" pr-6 pl-8 p-2 hover:bg-primery hover:rounded-2xl hover:font-semibold">
                    <Link to={`/dashboard${links?.path}`}>
                      <div className="flex items-center gap-4  hover:text-white">
                        <div className="w-[10%]  flex justify-center   hover:text-white">
                          {iconRenderer(links?.icon)}
                        </div>
                        <span className="text-[18px]  font-poppins">
                          {links?.label}
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}

              <div className="pr-6 pl-8 p-2 flex  hover:bg-primery hover:rounded-2xl hover:font-semibold">
                <Link  onClick={Logout}>
                  <div className="flex items-center gap-4  hover:text-white">
                    <div className="w-[10%]  flex justify-center   hover:text-white">
                      {iconRenderer(`LogoutIcon`)}
                    </div>
                    <span className="text-[18px]  font-poppins">
                      Logout
                    </span>
                  </div>
                </Link>
              </div>


            </div>
          </div>

          {/* {!onlyMenu && (
            <div className="p-8 pt-0">
              <SidbarProfile />
            </div>
          )} */}
        </div>
      </nav>
    </>
  )
}
