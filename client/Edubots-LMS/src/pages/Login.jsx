import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Validation from '../components/LoginValidation'

const Login = () => {
    const navigate = useNavigate();
    const navToDashboard = () => {
        window.localStorage.setItem("user", values.username)
        //navigate('/dashboard', { state: values });
        navigate('/dashboard');
    }

    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({})


    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.username === "" && errors.password === "") {
            axios.post('http://10.0.0.12:3001/auth/user', values)
                .then(result => {
                    if (result.status === 200) {
                        navToDashboard();
                    }
                    else {
                        alert("An error has occurred!");
                    }
                })
                .catch(err => console.log(err))
        }

    }

    return (
        <div className='auth'>
            <form action="" onSubmit={handleSubmit}>
                <input name='username' onChange={handleInput} type="text" placeholder='username' />
                {errors.username && <span>{errors.username}</span>}
                <input name='password' onChange={handleInput} type="password" placeholder='password' />
                {errors.password && <span>{errors.password}</span>}
                <button type="submit">Login</button>
                <span>Dont have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}
export default Login