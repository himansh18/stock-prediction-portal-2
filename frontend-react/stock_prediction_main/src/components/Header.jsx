import React , {useContext} from 'react'
import Button from './Button'
import {Link,useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider';

export const Header = () => {
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext); 
   
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const handleLogout = () => {
    localStorage.removeItem('access_Token');
    localStorage.removeItem('refresh_Token');
    setIsLoggedIn(false); // Update the login state in AuthContext
    navigate('/login'); // Navigate to the login page after logout
  }
  return (
    <>
    <nav className = 'navbar container pt-3 pb-3 d-flex align-items-start'>
        <Link className = 'navbar-brand text-light' to='/'>Stock Prediction</Link>
        <div>
          {isLoggedIn ? (
            <button className = 'btn btn-danger' onClick={handleLogout}>
              logout
            </button>
          ): (
            <>
            <Button text='Login' class='btn-outline-info' url="/login"/>
            &nbsp;
            <Button text='Register' class='btn-outline-info' url="/register"/>
            </>
          )}
        </div>
        </nav>
    </>
  )
}
export default Header
