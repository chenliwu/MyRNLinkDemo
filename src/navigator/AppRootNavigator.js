import {
    createSwitchNavigator
} from 'react-navigation';

import LaunchNavigator from './LaunchNavigator';
import LoginNavigator from './LoginNavigator';
import RegisterNavigator from './RegisterNavigator';
import MainNavigator from './MainNavigator';


/**
 * created by chenlw on 2019/06/01
 * work:结合导航的身份验证流程。
 *
 *  身份验证流程使用SwitchNavigator作为APP的顶级导航器（AppRootNavigator），目前有4个切换分支，其中分支还可能包含其他页面的导航
 * （1）Launch：启动页面
 * （2）Login：登录页面（StackNavigator）
 * （3）Main：主页（StackNavigator）
 * （4）AppSetting：APP配置页面（StackNavigator）
 */
const AppRootNavigator = createSwitchNavigator(
    {
        Launch: {
            //启动页面
            screen: LaunchNavigator,
        },
        Login: {
            //登录页面
            screen: LoginNavigator,
        },
        Main: {
            //主页
            screen: MainNavigator,
        },
        Register: {
            //APP配置页面
            screen: RegisterNavigator,
        },
    },
    {
        initialRouteName: "Launch"
    }
);
export default AppRootNavigator;
