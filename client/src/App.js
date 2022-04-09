import Nav from "./components/Nav";
import Header from "./components/Header";
import Parachute from "./components/Parachute";
import Monsters from "./components/Monsters";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <Header></Header>
        <Parachute></Parachute>
        <Word />
        <Monsters></Monsters>
      </main>
    </div>
  );
}

export default App;
