
// import Reports from './pages/report';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HeaderManageProduct from './components/manageProduct/header';
import BodyManageProduct from './components/manageProduct/body';
import FooterManageProduct from './components/manageProduct/footer';
import HeaderManageCategory from './components/manageCategory/header';
import BodyManageCategory from './components/manageCategory/body';
import FooterManageCategory from './components/manageCategory/footer';
import HeaderUserManagement from './components/userManagement/header';
import BodyUserManagement from './components/userManagement/body';
import FooterUserManagement from './components/userManagement/footer';
import Transaction from './transaction';


function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/report' element={<Reports/>}/> */}
        <Route path='/user-management' element={<AdminPage viewHeader={<HeaderUserManagement/>} viewBody={<BodyUserManagement/>} viewFooter={<FooterUserManagement/>}/>} />
        <Route path='/manage-category'element={<AdminPage viewHeader={<HeaderManageCategory />} viewBody={<BodyManageCategory/>} viewFooter={<FooterManageCategory/>} />} />
        <Route path='/manage-product' element={<AdminPage viewHeader={<HeaderManageProduct />} viewBody={<BodyManageProduct/>} viewFooter={<FooterManageProduct/>} />} />
        <Route path='/transaction' element={<Transaction/>} />
      </Routes>
  
    </>
  );
}

export default App;
