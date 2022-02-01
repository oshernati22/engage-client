import Logo from "./Assets/logo-chozen-Proxima-Nova-font.svg";
import "./App.scss";
import Library from "./Components/Library/Library";

function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="head_container">
          <div>
            {" "}
            <img className="logo" src={Logo} alt="logo"></img>{" "}
            <div className="sub_head">Library Management Application</div>
          </div>
        </div>
        <Library />
      </div>
    </div>
  );
}

export default App;
