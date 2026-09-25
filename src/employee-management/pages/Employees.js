import "./EmployeeCard.css" 
import EmployeeCard from "../components/EmployeeCard";
function Employees(){
    const employees=[
        {
            id: 1,
            name: "Bhavana",
             department: "IT",
            email: "bhavana@example.com"
        },
        {
            id: 2,
            name: "Ananya",
            department: "HR",
            email: "ananya@example.com"
        },
        {
            id: 3,
            name: "Rahul",
            department: "Finance",
            email: "rahul@example.com"
        }
    ];

 return (
        <div>
            <h1>Employees</h1>

            {employees.map((employee) => (
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                />
            ))}
        </div>
    );
}

export default Employees;