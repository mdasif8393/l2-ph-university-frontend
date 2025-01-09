import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1 className="text-center">Navbar</h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
