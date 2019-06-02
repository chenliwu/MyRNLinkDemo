import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import {
    SafeAreaView
} from 'react-navigation';
import GlobalStatusBar from "../components/GlobalStatusBar";


export default class Protocol extends Component {

    static navigationOptions = ({navigation, screenProps}) => {
        return ({
            title: '协议页面',
        });
    };


    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <SafeAreaView style={styles.container} forceInset={{top: 'never'}}>
                <GlobalStatusBar/>
                <Text>协议页面</Text>
                <Button title={'返回登录页面'} onPress={() => {
                    this.props.navigation.pop();
                }}/>
            </SafeAreaView>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
