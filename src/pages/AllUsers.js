import { useState } from "react"
import UserCard from "../components/UserCard"

function AllUsers() {
    let [users, setUsers] = useState([])

    fetch('/api-users').then(
        response => response.json()).then(data => {
            let tempUser = []
            for (const key in data) {
                let user = {
                    id: key,
                    ...data[key],
                }
                tempUser.push(user)
            }
            setUsers(tempUser)
        })

    return (
        <div className="upcoming-page">
            <h2>All Registered Users</h2>
            <div className="all-users">
                {
                    users.map((user) => {
                        return (<UserCard name={user.name} email={user.email} />)
                    })
                }
            </div>
        </div>
    )
}

export default AllUsers