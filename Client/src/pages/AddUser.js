import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
    let nameInput = useRef()
    let emailInput = useRef()
    let navigate = useNavigate()
    let [loadingStatus, setLoadingStatus] = useState(false)
    function addMeetingHandler() {
        setLoadingStatus(true)
        let tempUser = {
            name: nameInput.current.value,
            email: emailInput.current.value,
        }
        console.log(tempUser)
        fetch('http://localhost:8000/save-data', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tempUser)
        }).then(() => {
            setLoadingStatus(false)
            navigate('/users')
        })
    }
    return (
        <div className="add-page">
            <h1>Add new user</h1>
            <div className="input">
                <input type="text" ref={nameInput} placeholder="Enter the name" />
                <input type="text" ref={emailInput} placeholder="Enter the email" />
                <button className='add-btn' onClick={addMeetingHandler}>Add user <div class={loadingStatus === true ? "loader" : ""}></div></button>
            </div>

        </div>
    )
}

export default AddUser