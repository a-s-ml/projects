import { Routes, Route } from "react-router-dom"
import { MainPage } from "./components/pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/viktorinaonlinebot" element={<MainPage />} />
    </Routes>
  );
}

export default App;
