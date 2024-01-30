
import "./App.css";


function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      <div
        className="col-span-1 py-5 h-60 rounded-lg font-mono bg-primary hover:bg-secondary hover:drop-shadow-2xl hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300">
        <p></p>
      </div>
      <div className="col-span-1 lg:col-span-2 py-5 h-60 rounded-lg font-sans font-light bg-primary hover:bg-secondary hover:drop-shadow-2xl hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300">
        <p></p>
      </div>
      <div className="col-span-1 lg:col-span-2 py-5 h-60 rounded-lg bg-primary hover:bg-secondary hover:drop-shadow-2xl hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300">
        <p></p>
      </div>
      <div className="py-5 rounded-lg h-60 bg-primary hover:bg-secondary hover:drop-shadow-2xl hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300">
        <p></p>
      </div>
      <div className="py-5 rounded-lg h-60 bg-primary hover:bg-secondary hover:drop-shadow-2xl hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300">
        <p></p>
      </div>
      <div className="col-span-1 lg:col-span-2 py-5 h-60 rounded-lg bg-primary hover:bg-secondary hover:drop-shadow-2xl hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300">
        <p></p>
      </div>
    </div>
  );
}

export default App;
