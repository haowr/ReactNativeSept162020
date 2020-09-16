import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Button, Text } from 'react-native';
import { AuthNavProps, AuthParamList } from './AuthParamList';
import { AuthContext } from './AuthProvider';
import { Center } from './Center';

interface AuthStackProps {

}
const Stack = createStackNavigator<AuthParamList>()

function Login({ navigation, route }:AuthNavProps<'Login'>){

   const {login} = useContext(AuthContext)

    return (
        <Center>
   
            <Text> I am a login screen </Text>
            <Button 
                title ="Log Me In" 
                onPress={ ()=>{
                login()
            }}/>
            <Button 
                title ="go to register" 
                onPress={ ()=>{
                navigation.navigate('Register');
            }}
            />

        </Center>
    );

}
function Register( {
    navigation,
    route
} : AuthNavProps<'Register'>){

   
    return (
        <Center>
   
            <Text> route name: {route.name} </Text>
            <Button 
                title ="go to login" 
                onPress={ ()=>{
                navigation.navigate('Login');
            }}
            />
        </Center>
    );

}
export const AuthStack: React.FC<AuthStackProps> = ({}) => {
        return (

            <Stack.Navigator initialRouteName = "Login" screenOptions={{
            }}>

                <Stack.Screen name = 'Login' component={Login}
                    options={{
                        headerTitle : ()=> null
                    
                }}/>
                <Stack.Screen name = 'Register' component={Register} 
                 options={{
                    headerTitle : "Sign Up"
                }}/>

            </Stack.Navigator>


        );
}