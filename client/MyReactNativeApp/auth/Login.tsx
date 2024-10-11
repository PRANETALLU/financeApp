import React, { useState } from 'react';
import { useUserAuth } from '../context/UserContext'; // Import useUserAuth

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signIn } = useUserAuth(); // Get the signIn function from the context

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    setError(''); // Reset error before trying to sign in
    try {
      const userCred = await signIn(email, password);
      // Handle successful sign-in, e.g., redirect user
      console.log('Signed in successfully', userCred.user);
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
