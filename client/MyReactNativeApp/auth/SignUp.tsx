import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const signUp = async () => {
          if (email === '' || password === '') {
            return;
          }
          try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user); 
          }
          catch(error) {
            console.log(console.error());
          }
    }

    return(
        <View>
            <TextInput 
                placeholder="Enter Email"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput 
                placeholder="Password"
                value={password}
                onChangeText={(password) => setPassword(password)}
            />
            <Button title="Submit" onPress={signUp}/>
        </View>
    );
}

export default SignUp; 