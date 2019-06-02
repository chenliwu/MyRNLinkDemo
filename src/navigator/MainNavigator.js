import {
    createStackNavigator
} from 'react-navigation';

import Main from './../pages/Main';
import ServiceDetails from './../pages/ServiceDetails';
import Settings from './../pages/Settings';
import GlobalNavigationOptions from "./GlobalNavigationOptions";


/**
 * created by chenlw on 2019/06/01
 * work：封装主页导航组件
 */
export default createStackNavigator(
    {
        Main: {
            screen: Main,
        },
        ServiceDetails: {
            screen: ServiceDetails,
        },
        Settings: {
            screen: Settings,
        },

    },
    {
        initialRouteName: 'Main',
        navigationOptions: GlobalNavigationOptions,
        headerLayoutPreset: 'center',   //将标题居中
    }
);
