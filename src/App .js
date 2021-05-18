import WeatherApp from './WeatherApp';
import "./App.css"



function App(){
  return (
    <div className="App">
      <div className="container">
    <WeatherApp defaultCity="Liverpool" />
      <footer>
        Coded by Kirsty Akahoho <a href='https://github.com/kirstyaka/MyApp'>
      Open-sourced on GitHub
      </a> 
      </footer>
      </div>
    </div>
  );
}

export default App;

