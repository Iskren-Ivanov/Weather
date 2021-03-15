import './App.css';
import NavBar from './Component/Header/NavBar.js';
import Title from './Component/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <NavBar />
      </div>
      <div className="titleContainer">
        <div className="leftSideContainer">
          <Title city={'Varna'} />
        </div>
        <div className="centerSideContainer">
          <Title city={'Sofia'} />
        </div>
        <div className="rightSideContainer">
          <Title city={'Plovdiv'} />
        </div>
      </div>
    </div >
  );
}

export default App;
