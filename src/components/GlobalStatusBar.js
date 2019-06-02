import React from 'react';
import {
    View,
    StatusBar,
    Platform
} from 'react-native';

/**
 * 2018-11-12
 * chenlw
 * work：封装全局状态栏组件
 */
export default class GlobalStatusBar extends React.Component {

    render() {
        const {backgroundColor, barStyle} = this.props;
        return (
            <View>
                {
                    Platform.OS === 'android' ?
                        <StatusBar backgroundColor={backgroundColor ? backgroundColor : 'transparent'}
                                   translucent={true}>
                        </StatusBar>
                        :
                        <StatusBar
                            hidden={false}
                            animated={true}
                            barStyle={barStyle ? barStyle : 'light-content'}
                            //networkActivityIndicatorVisible={true}
                        >
                        </StatusBar>
                }
            </View>
        )
    }
}