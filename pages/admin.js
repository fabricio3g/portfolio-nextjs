import AdminLayout from "../components/AdminLayout";
import AdminLogin from "../components/AdminLogin";

const Admin = () => {

  const tokenExist = false

  return (
    <>
    { tokenExist ? <AdminLayout/> : <AdminLogin/> }
   </>
  );
};

export default Admin;
