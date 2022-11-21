import "./App.css";
import { NavBar } from "./components/NavBar";
import { TextForms } from "./components/TextForms";

function App() {
  return (
    <>
      <NavBar title="TextUtiles" />
      <div className="container">
        <TextForms heading="Enter the words to analayz" />
      </div>
    </>
  );
}

export default App;
