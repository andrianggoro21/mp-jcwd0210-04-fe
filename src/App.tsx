import Reports from './pages/report';
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
import HeaderProductList from './components/productList/header';
import BodyProductList from './components/productList/body';
import FooterProductList from './components/productList/footer';
import HeaderReportTransaction from './components/reportTransactions/header';
import BodyReportTransaction from './components/reportTransactions/body';
import FooterReportTransaction from './components/reportTransactions/footer';
import HeaderReportCashier from './components/reportCashier/header';
import BodyReportCashier from './components/reportCashier/body';
import FooterReportCashier from './components/reportCashier/footer';
import HeaderStatistic from './components/statistic/header';
import BodyStatistic from './components/statistic/body';
import FooterStatistic from './components/statistic/footer';



function App() {

  return (
    <>
      <Routes>
        <Route path='/report' element={<Reports/>}/>
        <Route path='/user-management' element={<AdminPage viewHeader={<HeaderUserManagement/>} viewBody={<BodyUserManagement/>} viewFooter={<FooterUserManagement/>}/>} />
        <Route path='/manage-category'element={<AdminPage viewHeader={<HeaderManageCategory />} viewBody={<BodyManageCategory/>} viewFooter={<FooterManageCategory/>} />} />
        <Route path='/manage-product' element={<AdminPage viewHeader={<HeaderManageProduct />} viewBody={<BodyManageProduct/>} viewFooter={<FooterManageProduct/>} />} />
        <Route path='/product-list' element={<AdminPage viewHeader={<HeaderProductList />} viewBody={<BodyProductList/>} viewFooter={<FooterProductList/>}/>} />
        <Route path='/report-transaction' element={<AdminPage viewHeader={<HeaderReportTransaction />} viewBody={<BodyReportTransaction/>} viewFooter={<FooterReportTransaction/>}/>} />
        <Route path='/report-cashier' element={<AdminPage viewHeader={<HeaderReportCashier />} viewBody={<BodyReportCashier/>} viewFooter={<FooterReportCashier/>}/>} />
        <Route path='/report-statistic' element={<AdminPage viewHeader={<HeaderStatistic />} viewBody={<BodyStatistic/>} />} />
      </Routes>
  
    </>
  )
}

export default App
