import AddTaks from "./components/AddTaks";
import Tasks from "./components/tasks";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <AddTaks />
      <Tasks />
    </div>
  );
}

export default App;
