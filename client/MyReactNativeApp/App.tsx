import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { database } from './firebaseConfig.js'; // Adjust the import
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

// Define User type
type User = {
  id: string;
  name: string;
  age: number;
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]); // Set the type here

  const fetchUsers = async () => {
    try {
      const collectionRef = collection(database, 'users');
      const snapshot = await getDocs(collectionRef);
      const userList = snapshot.docs.map(doc => {
        const { name, age } = doc.data();
        return { id: doc.id, name, age }; // Return an object with id, name, and age
      });
      setUsers(userList); // Now this matches the User[] type
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Users List:</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.name} - Age: {item.age}</Text>
        )}
      />
      <Button title="Fetch Users" onPress={fetchUsers} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
