import Reports from './pages/report';
import { useState } from 'react';
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
import HeaderDashboard from './components/dashboard/header';
import BodyDashboard from './components/dashboard/body';
import FooterDashboard from './components/dashboard/footer';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputSearch, setInputSearch] = useState("")
  const [startDate, setStartDate] = useState(''); 
  const [endDate, setEndDate] = useState('');

  const handlePageChange = (newPage: number, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    setCurrentPage(newPage);
  }

  const handleSearch = (productName: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
   setInputSearch(productName)
  };

  const handleDateChange = (newStartDate: string, newEndDate: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    setEndDate(newEndDate);
    setStartDate(newStartDate);
   
  };
  return (
    <>
      <Routes>
        <Route path='/' element={<AdminPage viewHeader={<HeaderDashboard/>} viewBody={<BodyDashboard/>}/>} />
        <Route path='/user-management' element={<AdminPage viewHeader={<HeaderUserManagement/>} viewBody={<BodyUserManagement/>} viewFooter={<FooterUserManagement/>}/>} />
        <Route path='/manage-category'element={<AdminPage viewHeader={<HeaderManageCategory/>} viewBody={<BodyManageCategory />} viewFooter={<FooterManageCategory/>} />} />
        <Route path='/manage-product' element={<AdminPage viewHeader={<HeaderManageProduct />} viewBody={<BodyManageProduct/>} viewFooter={<FooterManageProduct/>} />} />
        <Route path='/product-list' element={<AdminPage viewHeader={<HeaderProductList inputSearch={handleSearch} />} viewBody={<BodyProductList currentPage={currentPage} onPageChange={handlePageChange} inputSearch={inputSearch}/>} viewFooter={<FooterProductList currentPage={currentPage} onPageChange={handlePageChange}/>}/>} />
        <Route path='/report-transaction' element={<AdminPage viewHeader={<HeaderReportTransaction onDateChange={handleDateChange} />} viewBody={<BodyReportTransaction startDate={startDate} endDate={endDate} />} viewFooter={<FooterReportTransaction/>}/>} />
        <Route path='/report-cashier' element={<AdminPage viewHeader={<HeaderReportCashier />} viewBody={<BodyReportCashier/>} viewFooter={<FooterReportCashier/>}/>} />
        <Route path='/report-statistic' element={<AdminPage viewHeader={<HeaderStatistic />} viewBody={<BodyStatistic/>} />} />
      </Routes>
  
    </>
  )
}

export default App
