import AdminLayout from "../Components/AdminLayoud";
import AdminLogin from "../Components/AdminLogin";

const Admin = () => {

  const tokenExist = true

  return (
    <>
    { tokenExist ? <AdminLayout/> : <AdminLogin/> }
   </>
  );
};

export default Admin;
