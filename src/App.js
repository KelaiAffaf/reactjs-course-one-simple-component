import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Services from "./Components/Services";
function App() {
  let price = 0;
  return (
    <div className="App">
      <Header />
      <Main />
      <Services />
    </div>
  );
}

export default App;
