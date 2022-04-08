import Nav from './components/Nav';
import Header from './components/Header';
import Parachute from './components/Parachute';
import Monsters from './components/Monsters';

function App() {
  return (
    <div>
      <main>
          <Nav></Nav>
          <Header></Header>
          <Parachute></Parachute>
          <Monsters></Monsters>
      </main>
    </div>
  );
}

export default App;