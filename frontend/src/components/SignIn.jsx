import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <ul className='mt-10'>
            <li>
                <button data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link to='/'>
                        <FaSignInAlt className='inline-block' /> Login
                    </Link>
                </button>
            </li>
            <li>
                <button data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link to='/adminlogin'>
                        <FaSignInAlt className='inline-block' /> Admin Login
                    </Link>
                </button>
            </li>
            <li className='mt-1'>
                <button data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link to='/register'>
                        <FaUser className='inline-block' /> Create an account
                    </Link>
                </button>
            </li>
        </ul>
    )
}

export default Header