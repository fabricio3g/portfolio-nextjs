import AdminLayout from "../components/AdminLayoud";
import AdminLogin from "../components/AdminLogin";

const Admin = () => {

  const tokenExist = true

  return (
    <>
    { tokenExist ? <AdminLayout/> : <AdminLogin/> }
   </>
  );
};

export default Admin;
