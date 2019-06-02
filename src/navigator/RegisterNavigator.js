import {
    createStackNavigator
} from 'react-navigation';

import Protocol from './../pages/Protocol';
import Register from './../pages/Register';
import GlobalNavigationOptions from "./GlobalNavigationOptions";

/**
 * created by chenlw on 2019/06/01
 */
export default createStackNavigator(
    {
        Register: {
            screen: Register,
        },
        Protocol: {
            screen: Protocol,
        },
    },
    {
        initialRouteName: 'Register',
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center',   //将标题居中
    }
);
