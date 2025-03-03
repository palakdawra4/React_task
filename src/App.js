import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Task1 from "./components/task1/Task1";
import Task2 from "./components/task2/Task2";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/task1">Task 1</Link></li>
            <li><Link to="/task2">Task 2</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
