import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Adminlayout = () => {
  return (
    <div className="flex">
      <div className="flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[5]">
        <Outlet />
      </div>
    </div>
  );
};

export default Adminlayout;
