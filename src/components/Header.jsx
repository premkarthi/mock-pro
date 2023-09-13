import logo from '../assets/logo.png';

function Header() {
  return (
    <header className='shadow shadow-blue-500/40 md:shadow-indigo-500/40 py-4'>
        <div className='container mx-auto flex justify-between'>
            <div className="logo">
                <img src={logo} alt="mock-interview "/>
            </div>
            <div className="menu flex items-center">
                <ul className='flex items-center'>
                    <li className='mx-3'>Discover</li>
                    <li className='mx-3'>Mentors</li>
                    <li className='mx-3'>Learn More</li>
                </ul>
                <button className='btn btn-primary mx-5'>Login</button>
                <button className='btn btn-transparent'>Signup</button>
            </div>

        </div> 
    </header>
  )
}

export default Header