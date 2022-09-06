import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () =>
  <Routes>
    <Route path="/pagina-inicial" element={<p>Teste</p>} />
    <Route path="*" element={<Navigate to="/pagina-inicial" />} />
  </Routes>;
