import React from 'react'

function LoginValidation(values) {
    let error = {}
    if (values.username === "") {
        error.username = "Username should not be empty"
    }
    else {
        error.username = ""
    }
    if (values.password === "") {
        error.password = "Password should not be empty"
    }
    else {
        error.password = ""
    }
    return error;
}

export default LoginValidation
