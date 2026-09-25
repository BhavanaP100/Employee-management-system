function  EmployeeCard({employee}){
    return(
        <div className="employee-card">
            <h3>{employee.name}</h3>
            <p>ID:{employee.id}</p>
         <p>Department: {employee.department}</p>
            <p>Email: {employee.email}</p>

        </div>
    );
}
export default EmployeeCard;