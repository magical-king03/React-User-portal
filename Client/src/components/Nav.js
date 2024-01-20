import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">User Portal</Link>
            <div className="links">
                <Link to='/users'>All users</Link>
                <Link to='/add'>Add users</Link>
            </div>
        </nav>
    )
}

export default Nav