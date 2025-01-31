function Tasks(props) {
  return (
    <h1>
      {props.tasks.map((task) => (
        <li className="bg-slate-400 text-white p-2 ">{task.title}</li>
      ))}
    </h1>
  );
}

export default Tasks;
