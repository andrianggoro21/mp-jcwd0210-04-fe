import { Route, Routes } from "react-router-dom";
import Transaction from "./transaction";

function App() {
  return (
    <>
      <Routes>
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </>
  );
}

export default App;
