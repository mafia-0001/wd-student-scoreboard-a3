import { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [temp, setTemp] = useState(student.score);

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>

      <td>
        <span className={student.score >= 40 ? "pass" : "fail"}>
          {student.score >= 40 ? "PASS" : "FAIL"}
        </span>
      </td>

      <td>
        <input
          type="number"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <button
          className="save-btn"
          onClick={() => updateScore(student.id, Number(temp))}
        >
          SAVE
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;