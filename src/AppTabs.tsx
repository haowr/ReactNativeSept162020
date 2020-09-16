import React, { useContext } from 'react'
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { AppParamList } from './AppParamList';
import { Center } from './Center';
import { Button, Text } from 'react-native';
import { AuthContext } from './AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { HomeStack } from './HomeStack';



interface AppTabsProps {

}

function Search(){

    return (
        <Center>
            <Text>search</Text>
        </Center>
    )

}
const Tabs = createBottomTabNavigator<AppParamList>()
export const AppTabs: React.FC<AppTabsProps> = ({}) => {
        return (

            <Tabs.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Home') {
                      iconName = 'home'
                      return <AntDesign name={"home"} size={size} color={color} />;

                    } else if (route.name === 'Search') {
                      iconName = 'ios-add';
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                })}
                tabBarOptions={{
                  activeTintColor: 'tomato',
                  inactiveTintColor: 'gray',
                }}
              >
                      
                <Tabs.Screen name="Home" component={HomeStack}/>
                <Tabs.Screen name="Search" component={Search}/>

            </Tabs.Navigator>
        );
}