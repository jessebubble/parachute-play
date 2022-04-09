import Nav from "./components/Nav";
import Header from "./components/Header";
import Parachute from "./components/Parachute";
import Monsters from "./components/Monsters";
import WrongGuesses from "./components/WrongGuesses";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <Header></Header>
        <Parachute></Parachute>
        <Keyboard />
        <Monsters></Monsters>
      </main>
    </div>
  );
}

export default App;
