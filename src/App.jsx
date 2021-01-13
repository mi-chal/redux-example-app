import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTask, removeTask } from './store/tasks/actions';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  function addNewTask() {
    dispatch(addTask('Buy new clothes'));
  }

  function removeLastTask() {
    dispatch(removeTask())
  }

  return (
    <div className="App">
      <h1>Redux example app</h1>
      <button type="button" onClick={addNewTask}>Add new task</button>
      <button type="button" onClick={removeLastTask}>Remove task</button>
      {tasks.map(task => (
        <p>{task}</p>
      ))}
    </div>
  );
}

export default App;
