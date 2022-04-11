import Nav from "./components/Nav";
import Header from "./components/Header";
import Parachute from './components/Parachute';
import Monsters from './components/Monsters';
import GameLogic from "./components/GameLogic/GameLogic";

function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <Header></Header>
        <Parachute></Parachute>
        <Monsters></Monsters>
        <GameLogic />
      </main>
    </div>
  );
}

export default App;
