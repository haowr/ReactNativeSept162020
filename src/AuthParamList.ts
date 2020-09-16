
import { createStackNavigator, StackNavigationProp } from   '@react-navigation/stack'
import { NavigationContainer, RouteProp } from '@react-navigation/native'

export type AuthParamList = {

    Login: undefined
    Register: undefined

}

export type AuthNavProps<T extends keyof AuthParamList> = {   

        navigation: StackNavigationProp<AuthParamList, T>;
        route: RouteProp<AuthParamList, T>
        
}

