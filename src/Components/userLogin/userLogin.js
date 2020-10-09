import React, {useState} from 'react'
import'./userLogin.css'

function UserLoginPage() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className="user-login-page">
            <form className="user-login-form">
                <h1>Please Login</h1>
                <label>User Name</label>
                <input
                    className="login-input"
                    type="text"
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                    value={userName}
                    >
                </input>
                <label>Password</label>
                <input
                    className="login-input"
                    type="text"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                >
                </input>
                <button
                className="login-button"
                onClick={(e) => {
                    e.preventDefault()
                    setUserName('')
                    setPassword('')
                }}
                >Login</button>
            </form>

        </section>
    )

}

export default UserLoginPage