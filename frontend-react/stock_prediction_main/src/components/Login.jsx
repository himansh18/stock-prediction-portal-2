import axios from 'axios';
import React ,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';/* useNavigate helps to navigate from one page to another */
import { AuthContext } from '../AuthProvider';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [error, setError] = useState(''); // this will help us to show error message if any error occurs
    const { setIsLoggedIn } = useContext(AuthContext); // Access the setIsLoggedIn function from AuthContext
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userData = {
            username: username,
            password: password }
            console.log(userData);

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData);
            localStorage.setItem('access_Token', response.data.access);
            localStorage.setItem('refresh_Token', response.data.refresh);
            setIsLoggedIn(true); // Update the login state in AuthContext
            navigate('/'); // Navigate to the dashboard upon successful login
        }catch (error) {
            console.error('Error logging in user:', error.response);       
            setError(error.response.data.detail || 'An error occurred during login.');
        }finally{
            setLoading(false);
        }
    }
  return (
    <>
        <div className = 'container'>
            <div className = "row justify-content-center align-items-center" style = {{height: '80vh'}}>
                <div className = "col-md-6 bg-light-dark p-5 rounded">
                    <h3 className = 'text-light'>Login</h3>
                    <form onSubmit = {handleLogin}>
                        {/* whatever we write in the input field it will be stored in the username variable and we can use it later */}
                        <input type = "text" className = 'form-control mb-3' placeholder = 'Enter Username' value = {username} onChange = {(e) => setUsername(e.target.value)}/> 

                        
                        <input type = "password" className = 'form-control mb-3' placeholder = 'Enter Password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>                    
                        
                        {error && <div className = "alert alert-danger">{error}</div>}
                        <button type = "submit" className = 'btn btn-outline-info d-block mx-auto' disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div> 
        </div>
    </>
  )
    }

export default Login