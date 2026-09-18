import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>Employee Management</h2>

            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/employees">Employees</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
}

export default Navbar;