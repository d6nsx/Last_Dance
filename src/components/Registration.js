import React, { useState } from 'react';
import InputField from './Input';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      setError('Все поля должны быть заполнены.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Пароли не совпадают.');
      return;
    }
    if (isRegistered) {
      setError('Пользователь с таким именем уже зарегистрирован.');
      return;
    }

    setError('');
    setIsRegistered(true);
    alert('Регистрация прошла успешно!');
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <InputField label="Имя пользователя:" type="text" value={username} onChange={setUsername} />
      <InputField label="Пароль:" type="password" value={password} onChange={setPassword} />
      <InputField label="Повторите пароль:" type="password" value={confirmPassword} onChange={setConfirmPassword} />
      {error && <div>{error}</div>}
      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
};

export default Registration;