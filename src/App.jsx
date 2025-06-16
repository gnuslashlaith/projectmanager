import './assets/App.css';
import PomorodoTimer from './Pages/PomorodoTimer';
import ProjectDashboard from './Pages/ProjectDashboard';
import ProjectTemplate from './Components/ProjectTemplate';
import ToDoList from './Pages/ToDoList';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
function App() {

  return(
    <Router>
      <Routes>
        <Route path= "/" element={<ProjectDashboard/>}/>
        <Route path= "/project/:id" element={<ProjectTemplate/>}/>
        <Route path="/todolist" element={<ToDoList/>}/>
        <Route path="/pomorodo" element={<PomorodoTimer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
