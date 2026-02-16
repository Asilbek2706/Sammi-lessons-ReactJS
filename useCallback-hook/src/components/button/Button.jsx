const Button = () => {
  const user = true;
  const login = 'login';

  return <button>{user ? login : 'logout'}</button>;
};

export default Button;
