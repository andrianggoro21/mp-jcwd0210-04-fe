import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminPage from "../../pages/AdminPage";
import HeaderUserManagement from "../../components/userManagement/header";
import BodyUserManagement from "../../components/userManagement/body";
import FooterUserManagement from "../../components/userManagement/footer";

const UserManagement = () => {
  return (
    <AdminPage
      viewHeader={<HeaderUserManagement />}
      viewBody={<BodyUserManagement />}
      viewFooter={<FooterUserManagement />}
    />
  );
};

export default UserManagement;
