import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index/IndexPage";
import ImplementationPage from "./pages/Implementation/ImplementationPage";
import BackendBefore from "./pages/BackendBefore/BackendBefore";
import NotBackendBefore from "./pages/NotBackendBefore/NotBackendBefore";
import AddPagev1 from "./pages/Add/v1/AddPagev1";
import AddPagev2 from "./pages/Add/v2/AddPagev2";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FullContentPagev1 from "./pages/FullContent/v1/FullContentPagev1";
import FullContentPagev2 from "./pages/FullContent/v2/FullContentPagev2";
import Success from "./pages/Implementation/Pages/Success";
import Failure from "./pages/Implementation/Pages/Failure";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/notBackendBefore" element={<NotBackendBefore />} />
          <Route path="/backendBefore" element={<BackendBefore />} />
          <Route path="/implementation" element={<ImplementationPage />} />
          <Route path="/v1/add" element={<AddPagev1 />} />
          <Route path="/v2/add" element={<AddPagev2 />} />
          <Route path="/" element={<IndexPage />} />
          <Route
            path="/articlesv1/:articleId"
            element={<FullContentPagev1 />}
          />
          <Route
            path="/articlesv2/:articleId"
            element={<FullContentPagev2 />}
          />
          <Route path="/implementation/success" element={<Success />} />
          <Route path="/implementation/failure" element={<Failure />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
