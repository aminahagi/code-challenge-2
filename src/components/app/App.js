import "./App.css";
import NavBar from "../Navbar";
import DataFetching from "../Datafetct";
import BotCollection from "../BotCollection";
function App() {
  return (
    <div>
      <NavBar />
      <DataFetching/>
      <BotCollection/>
    </div>
  );
}

export default App;
