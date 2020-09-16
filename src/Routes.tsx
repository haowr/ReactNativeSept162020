import React, { useContext, useEffect, useState } from 'react'
import { createStackNavigator, StackNavigationProp } from   '@react-navigation/stack'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { View, Text, Button, ActivityIndicator, AsyncStorage } from 'react-native';
import { Center } from './Center'
import { AuthParamList, AuthNavProps, } from './AuthParamList'
import { AuthContext } from './AuthProvider';
import { AppTabs } from './AppTabs';
import { AuthStack } from './AuthStack';

interface RoutesProps {



}



export const Routes: React.FC<RoutesProps> = ({}) =>{
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading ] = useState(true);
    
    useEffect(()=>{
        // check if user is logged in or not
        AsyncStorage.getItem('user').then(userString=>{

            console.log(userString)
            if(userString){
                // decode it 
                login()
            }                
            setLoading(false)


        })
       

    },[])
if(loading){
    return(

        <Center>
            <ActivityIndicator size="large"/>
        </Center>

    )}else{


    return (

        <NavigationContainer>

            {user ? (
              <AppTabs/>
                
            ):(

            <AuthStack/>

         )}

        </NavigationContainer>

    );

            }

}