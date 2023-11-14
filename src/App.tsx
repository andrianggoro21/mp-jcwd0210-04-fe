
import ManageProduct from './pages/manageProduct';
import Reports from './pages/report';
import { Route, Routes } from 'react-router-dom';


// import { Box } from "@chakra-ui/react";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/report' element={<Reports/>}/>
        <Route path='/manage-product' element={<ManageProduct/>} />
      </Routes>

      
    </>
  )
}

export default App
