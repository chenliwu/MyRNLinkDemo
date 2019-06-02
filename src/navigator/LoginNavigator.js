import {
    createStackNavigator
} from 'react-navigation';

import Login from './../pages/Login';


import GlobalNavigationOptions from './GlobalNavigationOptions';

/**
 * created by chenlw on 2019/06/01
 */
export default createStackNavigator(
    {
        Login: {
            screen: Login,
        }
    },
    {
        initialRouteName: 'Login',
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center',   //将标题居中
        //headerMode: 'float',            //指定页眉的呈现方式
    }
);
