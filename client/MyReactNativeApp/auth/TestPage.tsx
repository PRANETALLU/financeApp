import React from 'react';
import { View, Text } from 'react-native';
import { useUserAuth } from '../context/UserContext';
import { Button } from 'react-native';

export const Test = () => {
    const { user, logOut } = useUserAuth();

    const handlelogOut = async () => {
        await logOut(); 
    }

    console.log("User ", user?.email); 

    return (
        <View>
            <Text>The user is {user?.email} </Text>
            <Button title='Logout' onPress={handlelogOut}/>
        </View>
    )
}