import AddTaks from "./components/AddTaks";
import Tasks from "./components/tasks";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTaks />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
