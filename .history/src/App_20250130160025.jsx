import AddTaks from "./components/AddTaks";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar programação 2 horas por dia",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Ingles",
      description: "Estudar ingles 1 hora por dia",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Estudar Matematica",
      description: "Estudar matematica 1 hora por dia",
      isCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTaks />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
