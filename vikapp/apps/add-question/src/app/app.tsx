import { Provider } from "react-redux";
import { storeAddQuestion } from "@store/add-question";
import NewQuesion from "./components/NewQuesion";

export function App() {
  return (
    <Provider store={storeAddQuestion}>
      <NewQuesion />
    </Provider>
  );
}

export default App;
