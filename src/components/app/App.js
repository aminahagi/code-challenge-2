import "./App.css";
import NavBar from "../Navbar";
import DataFetching from "../Datafetct";
import BotCollection from "../BotCollection";
import BotArmy from "../YourBotArmy";
function App() {
  return (
    <div>
      <NavBar />
      <BotArmy/>
      <DataFetching/>
      
      <BotCollection/>
    </div>
  );
}

export default App;