import logo from './logo.svg';
import './App.css';

function Header(){
  return (
    <div>
      <input type = "text" onKeyPress={handleClick}/>
    </div>
  )
}

function handleClick()
{
  document.getElementById("App").style.color= "red";
}

function App() {
  return(
    <div className="App" >
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          id ="App"
        >
          Learn React
        </a>
      </header>
    </div>

  )
}



export default App;
