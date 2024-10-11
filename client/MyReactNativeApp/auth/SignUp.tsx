import { View, TextInput, Button, Text } from "react-native";
import { useState } from "react";
import { useUserAuth } from "../context/UserContext"; // Import useUserAuth

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const { signUp } = useUserAuth(); // Get the signUp function from the context

  const handleSignUp = async () => {
    setError(''); // Reset error state before sign-up
    if (email === '' || password === '') {
      setError('Email and password fields cannot be empty.');
      return;
    }
    try {
      const userCredential = await signUp(email, password);
      const user = userCredential.user;
      console.log(user); // Handle successful sign-up
    } catch (error) {
      setError('Failed to sign up. Please try again.'); // Set error message
      console.error(error);
    }
  };

  return (
    <View>
      {error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}
      <TextInput 
        placeholder="Enter Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput 
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <Button title="Submit" onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;
