import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className='home'>
            <h1 className='home-heading'>Manage all your users in one place</h1>
            <p className='content'>Streamline coaching workflows and enhance student management with our powerful landing page solution designed for coaches.</p>
            <Link to='/add' className='add-btn-home'>Add new user</Link>
            {/* <form method='post' action='test'>
                <button type='submit' className='add-btn-home'>Submit</button>
            </form> */}
        </div>
    )
}

export default Home