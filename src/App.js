import "./App.css";
import LoginPage from "./components/LoginPage";
import Background from "./components/background";
import Teams from "./components/Teams";

function App() {
  return (
    <div className="App">
      <Background />
      {/* <LoginPage /> */}
      <Teams />
    </div>
  );
}

export default App;
