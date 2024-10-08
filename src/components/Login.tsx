import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AllCss/Login.css';

export default function Login() {
  const [userEmail, setUserEmail] = useState({ email: '' });
  const [userPassword, setUserPassword] = useState({ password: '' });
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserEmail({
      ...userEmail,
      [name]: value,
    });

    setUserPassword({
      ...userPassword,
      [name]: value,
    });
    // Regex for Email https://stackoverflow.com/questions/73825083/regex-for-email-a-za-z2-4
    const emailValid = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(userEmail.email);
    if (emailValid && userPassword.password.length > 5) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email: userEmail.email }));
    navigate('/meals');
  };

  return (
    <section className="body-login">
      <div id="background-login" className="container-login">
        <h1 className="login">Login</h1>
          <form action="" onSubmit={ handleSubmit }>
            <input
              name="email"
              onChange={ handleLoginChange }
              placeholder="Digite seu email"
              type="email"
              data-testid="email-input"
              className="login-input"
            />
            <input
              name="password"
              onChange={ handleLoginChange }
              type="password"
              placeholder="Digite sua senha"
              data-testid="password-input"
              className="login-input"
            />
            <button
              type="submit"
              data-testid="login-submit-btn"
              disabled={ button }
              className="button-enter"
            >
              Enter
            </button>
          </form>
      </div>
    </section>
  );
}
