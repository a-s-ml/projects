import { Routes, Route } from "react-router-dom"
import { MainPage } from "./components/pages/MainPage";
import CategoryList from "./components/pages/CategoryList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Category" element={<CategoryList />} />
    </Routes>
  );
}

export default App;
