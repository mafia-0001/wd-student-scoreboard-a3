import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>SCORE</th>
          <th>STATUS</th>
          <th>UPDATE</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <StudentRow key={s.id} student={s} updateScore={updateScore} />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;