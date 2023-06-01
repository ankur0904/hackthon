import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index/IndexPage";
import ImplementationPage from "./pages/Implementation/ImplementationPage";
import BackendBefore from "./pages/BackendBefore/BackendBefore";
import NotBackendBefore from "./pages/NotBackendBefore/NotBackendBefore";
import AddPage from "./pages/Add/AddPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/notBackendBefore" element={<NotBackendBefore />} />
          <Route path="/backendBefore" element={<BackendBefore />} />
          <Route path="/implementation" element={<ImplementationPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
