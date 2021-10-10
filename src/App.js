import "./App.css";
import Background from "./components/background";
import Page2 from "./components/page2";
import Teams from "./components/Teams";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <Background />
      {/* <Page2 /> */}
      <LoginPage />
      {/* <Teams /> */}
    </div>
  );
}

export default App;
