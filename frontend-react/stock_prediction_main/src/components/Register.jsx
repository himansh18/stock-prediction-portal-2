import React ,{useState} from 'react' // usestate help us to get inout from user 
import axios from 'axios' // axios is used to make api calls
export const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');// these help to set the value of input field and get the value of input field
    const [error, setError] = useState(''); // this will help us to show error message if any error occurs
    const [success, setSuccess] = useState(''); // this will help us to show success message if registration is successful
    const [loading, setLoading] = useState(false); // this will help us to show loading message if registration is in progress
    const handleRegistration = async (e) => {
        e.preventDefault(); // this will prevent the page from reloading when we submit the form
        setLoading(true); // this will set loading to true when we submit the form
        const userData = {
            username: username,
            email: email,
            password: password
        };
        try{
            const response =  await axios.post('http://127.0.0.1:8000/api/v1/register/', userData);
            <small>{errors.username}&&<div className="text-danger">{errors.username}</div></small>
            console.log(response.data);
            console.log('User registered successfully');
           
            setError(''); // Clear any previous errors on successful registration
            setSuccess(true);
        } catch (error) {
            setError(error.response.data);
            console.error('Error registering user:', error.response);
        }finally{//we need finally block as it will run doesnt matter if it grts some errror.
            setLoading(false); // this will set loading to false when the form submission is complete
        }
    };
  return (
    <>
    <div className = 'container'>
        <div className = "row justify-content-center align-items-center" style = {{height: '80vh'}}>
            <div className = "col-md-6 bg-light-dark p-5 rounded">
                <h3 className = 'text-light'>Create an Account</h3>
                <form onSubmit={handleRegistration}>
                    {/* whatever we write in the input field it will be stored in the username variable and we can use it later */}
                    <input type = "text" className = 'form-control mb-3' placeholder = 'Enter Username' value = {username} onChange = {(e) => setUsername(e.target.value)}/> 
                    <small>{error.username &&<div className="text-danger">{error.username}</div>}</small>

                    <input type = "email" className = 'form-control mb-3' placeholder = 'Enter Email' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                    <small>{error.email &&<div className="text-danger">{error.email}</div>}</small>
                    <input type = "password" className = 'form-control mb-3' placeholder = 'Enter Password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                    <small>{error.password &&<div className="text-danger">{error.password}</div>}</small>
                    
                    {success && <div className="alert alert-success">User registered successfully!</div>}
                    <button type = "submit" className = 'btn btn-outline-info d-block mx-auto' disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
        </div> 
    </div>
    </>
  )
}
