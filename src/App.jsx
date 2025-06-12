import './assets/App.css';
import ProjectDashboard from './Pages/ProjectDashboard';
import ToDoList from './Pages/ToDoList';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
function App() {

  return(
    <Router>
      <Routes>
        <Route path= "/" element={<ProjectDashboard/>}/>
        <Route path="/todolist" element={<ToDoList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
