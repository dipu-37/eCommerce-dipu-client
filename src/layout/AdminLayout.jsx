import { Outlet } from "react-router-dom";

import SideBar from "../components/ui/adminUi/SideBar";
import Header from "../components/ui/Header";
import { ToastContainer } from "react-toastify";

const AdminLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex h-screen bg-gray-50">
      <SideBar></SideBar>
      <div className="flex flex-col flex-1">
        <main className="p-6">
          <Outlet />
          <ToastContainer></ToastContainer>
        </main>
      </div>
    </div>
    </div>
  );
};

export default AdminLayout;
