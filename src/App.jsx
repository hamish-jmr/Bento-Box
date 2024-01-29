import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="py-5 rounded-lg font-serif font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
          <p>Bold font-serif</p>
        </div>
        <div className="py-5 rounded-lg font-sans font-light bg-gradient-to-r from-cyan-500 to-blue-500">
          <p>light font-sans</p>
        </div>
        <div className="py-5 rounded-lg font-mono bg-gradient-to-r from-cyan-500 to-blue-500">
          <p>font-mono (my favourite so far)</p>
        </div>
        <div className="col-span-2 py-5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
          <p>This project is just a learning curve to understand TailwindCSS more in depth.</p>
        </div>
        <div className="py-5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
          <p>Insert image here</p>
        </div>
        <div className="py-5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
          <p>Maybe some interactive islands?</p>
        </div>
        <div className="col-span-2 py-5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
          <p>Explore and have fun.</p>
        </div>
      </div>
    </>
  );
}

export default App;
