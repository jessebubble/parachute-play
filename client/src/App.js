import Nav from "./components/Nav";
import Header from "./components/Header";
import GameLogic from "./components/GameLogic/GameLogic";

function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <Header></Header>
        <GameLogic />
      </main>
    </div>
  );
}

export default App;