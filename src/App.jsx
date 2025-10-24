import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Bitacora from "./components/Bitacora";
import PerfilErick from "./components/PerfilErick";
import PerfilNeuyin from "./components/PerfilNeuyin";
import JsonData from "./components/JsonData";
import ApiPublica from "./components/ApiPublica";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bitacora" element={<Bitacora />} />
        <Route path="/erick" element={<PerfilErick />} />
        <Route path="/neuyin" element={<PerfilNeuyin />} />
        <Route path="/json" element={<JsonData />} />
        <Route path="/api" element={<ApiPublica />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}
