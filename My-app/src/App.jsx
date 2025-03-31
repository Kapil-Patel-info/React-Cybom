import Emp_data from "./Emp_data";
import Emp_design from "./Emp_design";

const empList = Emp_data.map((emp, index) => (
  <Emp_design
    key={index}
    nm={emp.name}
    roll={emp.rollno}
    role={emp.role}
    comp={emp.company}
  />
));

const App = () => {
  return (
    <div>
      <table border={1}> 
        <tr>

          <th>Name</th>
          <th>Roll No</th>
          <th>Role</th>
          <th>Company</th>

        </tr>

        {empList}
      </table>
    </div>
  );
};

export default App;
