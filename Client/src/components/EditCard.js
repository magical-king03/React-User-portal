import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function EditCard() {
    const location = useLocation()
    const data = location.state
    const [nameValue, setNameValue] = useState(data.name);
    const [emailValue, setEmailValue] = useState(data.email)
    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
    }

    return (
        <div class="add-page">
            <h1 class="">Update user</h1>
            <p class="">Update the name or/and email to update the required user in the database</p>
            <form action="http://localhost:8000/update" method="post">
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Name:</label>
                    <input type="text" name="name" value={nameValue} onChange={handleNameChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address:</label>
                    <input type="email" value={emailValue} name="email" onChange={handleEmailChange} />
                    <input type="hidden" name="oldEmail" value={data.email} />
                </div>
                <button type="submit" class="cta-btn">Update</button>
            </form>
        </div>
    )
}

export default EditCard