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
// import FooterStatistic from './components/statistic/footer';
import HeaderDashboard from './components/dashboard/header';
import BodyDashboard from './components/dashboard/body';
import HeaderTransactionProduct from './components/transactionProductDetail/header';
import BodyTransactionProduct from './components/transactionProductDetail/body';
import FooterTransactionProduct from './components/transactionProductDetail/footer';
import HeaderCashierReportTable from './components/cashierReportTable/header';
import BodyCashierReportTable from './components/cashierReportTable/body';
import FooterCashierReportTable from './components/cashierReportTable/footer';

import Transaction from './transaction';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputSearch, setInputSearch] = useState("")
  const [startDate, setStartDate] = useState(''); 
  const [endDate, setEndDate] = useState('');
  const [currentPageManageProduct, setCurrentPageManageProduct] = useState(1);
  const [inputSearchManageProduct, setInputSearchManageProduct] = useState("");
  const [currentPageUserReport, setCurrentPageUserReport] = useState(1);
  const [inputSearchUsersReport, setInputSearchUserReport] = useState("")
  const [startDateCashier, setStartDateCashier] = useState(''); 
  const [endDateCashier, setEndDateCashier] = useState('');
  const [currentPageCashier, setCurrentPageCashier] = useState(1);
  const [currentPageReportTransaction, setCurrentPageReportTransaction] = useState(1);
  const [inputSearchReportTransaction, setInputSearchReportTransaction] = useState("");

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
  // manage product
  const handlePageChangeManageProduct = (newPage: number, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    setCurrentPageManageProduct(newPage);
  }

  const handleSearchManageProduct = (productName: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
   setInputSearchManageProduct(productName)
  };

   // user report
   const handlePageChangeUserReport = (newPage: number, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    setCurrentPageUserReport(newPage);
  }

  const handleSearchUserReport = (username: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
   setInputSearchUserReport(username)
  };

   // report transaction
   const handlePageChangeReportTransaction = (newPage: number, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    setCurrentPageReportTransaction(newPage);
  }

  const handleSearchReportTransaction = (username: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
   setInputSearchReportTransaction(username)
  };

  // date change cashier
  const handleDateChangeCashier = (newStartDate: string, newEndDate: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    setEndDateCashier(newEndDate);
    setStartDateCashier(newStartDate);
   
  };
  const handlePageChangeCashier = (newPage: number, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    setCurrentPageCashier(newPage);
  }
  return (
    <>
      <Routes>
        <Route path='/transaction' element={<Transaction/>} />
        <Route path='/' element={<AdminPage viewHeader={<HeaderDashboard/>} viewBody={<BodyDashboard/>}/>} />
        <Route path='/user-management' element={<AdminPage viewHeader={<HeaderUserManagement/>} viewBody={<BodyUserManagement/>} viewFooter={<FooterUserManagement/>}/>} />
        <Route path='/manage-category'element={<AdminPage viewHeader={<HeaderManageCategory/>} viewBody={<BodyManageCategory />}  />} />
        <Route path='/manage-product' element={<AdminPage viewHeader={<HeaderManageProduct inputSearch={handleSearchManageProduct} />} viewBody={<BodyManageProduct currentPage={currentPageManageProduct} onPageChange={handlePageChangeManageProduct} inputSearch={inputSearchManageProduct} />} viewFooter={<FooterManageProduct currentPage={currentPageManageProduct} onPageChange={handlePageChangeManageProduct} />} />} />
        <Route path='/product-list' element={<AdminPage viewHeader={<HeaderProductList inputSearch={handleSearch} />} viewBody={<BodyProductList currentPage={currentPage} onPageChange={handlePageChange} inputSearch={inputSearch}/>} viewFooter={<FooterProductList currentPage={currentPage} onPageChange={handlePageChange}/>}/>} />
        <Route path='/report-transaction' element={<AdminPage viewHeader={<HeaderReportTransaction onDateChange={handleDateChange} />} viewBody={<BodyReportTransaction startDate={startDate} endDate={endDate} currentPage={currentPageReportTransaction} onPageChange={handlePageChangeReportTransaction}/>} viewFooter={<FooterReportTransaction currentPage={currentPageReportTransaction} onPageChange={handlePageChangeReportTransaction} />}/>} />
        <Route path='/report-cashier' element={<AdminPage viewHeader={<HeaderReportCashier inputSearch={handleSearchUserReport} />} viewBody={<BodyReportCashier currentPage={currentPageUserReport} onPageChange={handlePageChangeUserReport} inputSearch={inputSearchUsersReport} />} viewFooter={<FooterReportCashier currentPage={currentPageUserReport} onPageChange={handlePageChangeUserReport} />}/>} />
        <Route path='/report-statistic' element={<AdminPage viewHeader={<HeaderStatistic />} viewBody={<BodyStatistic/>} />} />
        <Route path='/transaction-product' element={<AdminPage viewHeader={<HeaderTransactionProduct />} viewBody={<BodyTransactionProduct/>} viewFooter={<FooterTransactionProduct/>}/>} />
        <Route path='/transaction-cashier' element={<AdminPage viewHeader={<HeaderCashierReportTable onDateChange={handleDateChangeCashier} />} viewBody={<BodyCashierReportTable startDate={startDateCashier} endDate={endDateCashier} currentPage={currentPageCashier} onPageChange={handlePageChangeCashier}/>} viewFooter={<FooterCashierReportTable currentPage={currentPageCashier} onPageChange={handlePageChangeCashier}/>}/>} />
      </Routes>
  
    </>
  );
}

export default App;
