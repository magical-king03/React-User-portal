import { useNavigate } from "react-router-dom";

function UserCard(props) {
  let navigate = useNavigate()

  function editUserHandler() {
    let users = {
      name: props.name,
      email: props.email,
    }
    navigate('/edit', { state: users })
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-content-header">
          <h2>{props.name}</h2>
          <p>{props.email}</p>

          <div className="actions">
            <div>
              <button class="cta-btn-1" onClick={editUserHandler}>Edit</button>
            </div>
            <form action="http://localhost:8000/del" method="post">
              <div className="">
                <input type="hidden" name="email" value={props.email} />
                <button class="cta-btn-2">Del</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default UserCard