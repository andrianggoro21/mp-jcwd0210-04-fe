import Reports from "./pages/report";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminPage from "./pages/AdminPage";
import HeaderManageProduct from "./components/manageProduct/header";
import BodyManageProduct from "./components/manageProduct/body";
import FooterManageProduct from "./components/manageProduct/footer";
import HeaderManageCategory from "./components/manageCategory/header";
import BodyManageCategory from "./components/manageCategory/body";
import FooterManageCategory from "./components/manageCategory/footer";
import Login from "./pages/Auth/login";
import UserManagement from "./components/userManagement/userManagement";

function App() {
  const isLoggedIn = useSelector((state) => {
    return state?.mainReducer?.auth.isLoggedIn;
  });

  return (
    <>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/report" element={<Reports />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route
              path="/manage-category"
              element={
                <AdminPage
                  viewHeader={<HeaderManageCategory />}
                  viewBody={<BodyManageCategory />}
                  viewFooter={<FooterManageCategory />}
                />
              }
            />
            <Route
              path="/manage-product"
              element={
                <AdminPage
                  viewHeader={<HeaderManageProduct />}
                  viewBody={<BodyManageProduct />}
                  viewFooter={<FooterManageProduct />}
                />
              }
            />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
