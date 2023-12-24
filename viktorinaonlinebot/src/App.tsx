import { Routes, Route } from "react-router-dom"
import { MainPage } from "./components/pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
