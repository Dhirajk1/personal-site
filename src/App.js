import "./App.css";
import Card from "./card";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="text-blue-600 hover:text-red-300 underline">
          Hover over me 😳
        </h1>
        Personal Site for Dhiraj Kuttichirayil
        <Card />
      </header>
    </div>
  );
}

export default App;
