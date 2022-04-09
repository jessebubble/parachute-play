import Nav from "./components/Nav";
import Header from "./components/Header";
import Parachute from "./components/Parachute";
import Monsters from "./components/Monsters";
import Word from "./components/Word";
import WrongGuesses from "./components/WrongGuesses";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <Header></Header>
        <Parachute></Parachute>
        <Monsters></Monsters>
        <Word />
        <WrongGuesses />
        <div>
          <Keyboard />
        </div>
      </main>
    </div>
  );
}

export default App;
