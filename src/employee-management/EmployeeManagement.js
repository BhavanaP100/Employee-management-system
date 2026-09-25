import Navbar from "./components/Navbar"
import Home  from "./pages/Home";
import Employees from "./pages/Employees";

function EmployeeManagement() {
    return (
        <div>
            <Navbar />
            <Home />
            <Employees />
        </div>
    );
}

export default EmployeeManagement;