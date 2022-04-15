import AdminLayout from "../components/AdminLayoud";
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
