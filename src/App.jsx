import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-400 py-5 rounded-lg">01</div>
        <div className="bg-slate-200 py-5 rounded-lg">02</div>
        <div className="bg-slate-400 py-5 rounded-lg">03</div>
        <div className="col-span-2 bg-slate-200 py-5 rounded-lg">04</div>
        <div className="bg-slate-400 py-5 rounded-lg">05</div>
        <div className="bg-slate-200 py-5 rounded-lg">06</div>
        <div className="col-span-2 bg-slate-400 py-5 rounded-lg">07</div>
      </div>
    </>
  );
}

export default App;
