import {
    StatusBar,
    Platform
} from 'react-native';

const isAndroid = Platform.OS === 'android';
const headerHeight = isAndroid ? 65 : 50;
const headerPaddingTop = isAndroid ? StatusBar.currentHeight / 2 + 8 : 0;


/**
 * 2created by chenlw on 2019/06/01
 * work：
 * （1）封装全局配置navigationOptions。
 * （2）统一配置顶部标题栏的外观。
 */
const GlobalNavigationOptions = {
    //headerTransparent: true,设置header为透明色：注意如果这个属性为true，页面的组件会占据header的控件，另外如果设置了header背景色，页面组件会被遮挡。
    //headerTransparent: true：可以去掉header底部的横线（IOS）或者阴影（Android）。
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#108ee9',//顶部标题栏的背景色
        height: headerHeight, //顶部标题栏的高度
        borderBottomWidth: 0,   //去除横线
        elevation: 0,   //去除android 的 Bar底部有一条阴影
        borderColor: '#00000000',
        paddingTop: headerPaddingTop,
    },
    headerTitleStyle: {
        color: '#fff',   //标题的字体颜色
        fontSize: 18,    //标题字体大小
    },
    //headerLeftContainerStyle: {},
    headerBackTitleStyle: {
        backgroundColor: '#108ee9', //顶部标题栏的背景色
    },
    headerForceInset: { //允许将 forceInset 对象传递给页眉中使用的内部 SafeAreaView。
        //top: 30
    },
    gesturesEnabled: true,   //允许滑动退出
    //headerTransitionPreset:'uikit', //header动画效果
};

export default GlobalNavigationOptions;
