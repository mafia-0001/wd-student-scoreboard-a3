import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 68 },
  ]);

  const updateScore = (id, newScore) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, score: newScore } : s
    );
    setStudents(updated);
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score,
    };
    setStudents([...students, newStudent]);
  };

  const passed = students.filter((s) => s.score >= 40).length;
  const avg = Math.round(
    students.reduce((a, b) => a + b.score, 0) / students.length
  );

  return (
    <div className="app">
      <Header />

      <AddStudentForm addStudent={addStudent} />

      <div className="stats">
        <div className="card">
          <p>Total</p>
          <h2>{students.length}</h2>
        </div>
        <div className="card">
          <p>Passed</p>
          <h2>{passed}</h2>
        </div>
        <div className="card">
          <p>Avg Score</p>
          <h2>{avg}</h2>
        </div>
      </div>

      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;