import { useState } from "react";
import AdminImage from './../assests/images.png';
import { FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { Link, redirect } from 'react-router-dom';


const Login = ({  }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8081/api/user/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                console.log("Test")
               window.location.href= "http://localhost:5173/employees";
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Email or password is incorrect');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An unexpected error occurred');
        }
    };

    return (
        <>
            <main>
                <div className="login-block">
                    <img
                        src={AdminImage}
                        alt="Scanfcode"
                    />
                    <h1>Connectez-vous à votre compte</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <FaEnvelope className='ti-email' />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Votre adresse e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <hr className="hr-xs" />
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <FaLock className='ti-unlock' />
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Votre mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <hr className="hr-xs" />
                        <button className="btn btn-primary btn-block" type="submit">
                            Se connecter
                        </button>
                        {error && <div className="text-danger">{error}</div>}
                    </form>
                </div>
            </main>
        </>
    );
}

export default Login;
