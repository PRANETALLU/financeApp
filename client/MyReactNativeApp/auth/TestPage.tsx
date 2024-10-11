import React from 'react';
import { View, Text } from 'react-native';
import { useUserAuth } from '../context/UserContext'

export const Test = () => {
    const { user } = useUserAuth();

    return (
        <View>
            <Text>The user is {user.email} </Text>
        </View>
    )
}