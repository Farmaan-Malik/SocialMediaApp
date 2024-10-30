import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();
const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{header: () => null, headerShown: false}}>
            <Stack.Screen name={Routes.Home} component={HomeScreen}>

            </Stack.Screen>
        </Stack.Navigator>
    );

};
export default MainNavigation;
